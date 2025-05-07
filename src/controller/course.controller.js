import { Course } from "../models/index.js";

import { courseValidation, errorResponse, successRes } from "../utils/index.js";

export class CourseController {
  async create(req, res) {
    try {
      const { data } = courseValidation(req.body);
      const { title, description, teacher_id } = data;

      const existsCourse = await Course.findOne({ title });

      if (existsCourse) {
        return errorResponse(res, 409, `Course already exists`);
      }
      
      const newCourse = await Course.create({ title, description, teacher_id });

      return successRes(res, 201, `success`, newCourse);
    } catch (error) {
      return errorResponse(res, 500, error);
    }
  }

  async getAll(__, res) {
    try {
      const allCourses = await Course.find();

      return successRes(res, 200, "success", allCourses);
    } catch (error) {
      return errorResponse(res, 500, error);
    }
  }

  async updateCourseById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return errorResponse(res, 400, `ID not found`);
      }

      const existsCourse = await Course.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!existsCourse) {
        return errorResponse(res, 404, `Course not found`);
      }

      return successRes(res, 200, `success`, existsCourse);
    } catch (error) {
      return errorResponse(res, 500, error);
    }
  }

  async deleteCourseById(req, res) {
    const { id } = req.params;

    if (!id) {
      return errorResponse(res, 400, `ID not found`);
    }

    const course = await Course.findById(id);

    if (!course) {
      return errorResponse(res, 404, `Course not found`);
    }

    await Course.findByIdAndDelete(id);

    return successRes(res, 200, `success`);
  }
}
