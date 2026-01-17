import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => {
  res.json(['Hello World!!!']);
});

export default router;
