import pool from "../config/database.js";

export const postNewOffer = async (req, res) => {
  // début de la transaction
  const conn = await pool.getConnection();

  try {
    const {
      name,
      url,
      location,
      time,
      contract,
      position,
      level,
      role,
      tools,
      languages,
      isNew,
      isFeatured,
      description_jobs,
      responsabilities,
      benefits,
    } = req.body;

    await conn.beginTransaction();

    // j'ajoute les éléments destructurés dans la bonne table
    const [jobResult] = await conn.execute(
      `INSERT INTO jobs (name, location, time, contract, position, level, role)
        VALUES(?,?,?,?,?,?,?)`,
      [name, location, time, contract, position, level, role]
    );

    //Je recup l'id de cette offre
    const jobID = jobResult.insertId;

    await conn.execute(`INSERT INTO images (id_jobs, url) VALUES(?,?)`, [
      jobID,
      url,
    ]);

    await conn.execute(
      `INSERT INTO tags (id_jobs, tools, languages) VALUES (?,?,?)`,
      [jobID, tools, languages]
    );

    await conn.execute(
      `INSERT INTO status (id_jobs, isNew, isFeatured) VALUES (?,?,?)`,
      [jobID, isNew, isFeatured]
    );

    await conn.execute(
      `INSERT INTO description (id_jobs, description_jobs, responsabilities, benefits) VALUES(?,?,?,?)`,
      [jobID, description_jobs, responsabilities, benefits]
    );

    await conn.commit();

    res.status(200).json({ message: "Offer successfully added!" });
  } catch (error) {
    // j'annule tout en cas d'erreur
    await conn.rollback();
    res
      .status(500)
      .json({ error: `Failed to add data`, message: error.message });
  } finally {
    conn.release();
  }
};
