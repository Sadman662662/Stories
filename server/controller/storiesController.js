import Story from "../models/story.js";
import mongoose from "mongoose";
import express from "express";
export const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createStory = async (req, res) => {
  const story = req.body;
  const newStory = new Story(story);

  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const patchStory = async (req, res) => {
  const { id: _id } = req.params;
  const story = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with that id");
  const updatedStory = await Story.findByIdAndUpdate(
    _id,
    { ...story, _id },
    { new: true }
  );
  res.status(204).json(updatedStory);
};

export const deleteStory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Story.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
