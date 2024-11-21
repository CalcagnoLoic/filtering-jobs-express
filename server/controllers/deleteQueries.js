import pool from "../config/database.js";

export const deleteOffer = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: "Missing ID" });

  const query = `
    DELETE FROM jobs
    WHERE id = ?
    `;

  try {
    const [result] = await pool.query(query, [id]);

    if (result.affectedRows === 0)
      return res.status(400).json({ message: "Job ID not found" });

    res.status(201).json({ message: "Job deleted successfully " });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
