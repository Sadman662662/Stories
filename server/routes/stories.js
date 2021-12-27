import express from "express";
import {
  getStories,
  createStory,
  patchStory,
  deleteStory,
} from "../controller/storiesController.js";

const router = express.Router();

router.get("/", getStories);
router.post("/", createStory);
router.patch("/:id", patchStory);
router.delete("/:id", deleteStory);

export default router;
