import pool from "../config/database.js";

export const getAllInformation = async (req, res) => {
  try {
    const query = `
        SELECT * 
        FROM jobs as j
        INNER JOIN images as i ON j.id = i.id_jobs
        INNER JOIN status as s ON j.id = s.id_jobs
        INNER JOIN tags as t ON j.id = t.id_jobs
        `;

    const [rows] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).send(error);
  }
};
