import z from "zod";

// User validation
const user = z.object({
  name: z.string().min(5).max(20),
  email: z.string().email(),
  password: z.string().min(4).max(15),
  enrolledCourse_id: z.string().optional(),
  role: z.enum("user", "admin", "superadmin", "teacher").optional(),
  otp_secret: z.string().optional(),
  otp_enabled: z.boolean().default(false),
});

export const userValidation = (data) => {
  const res = user.safeParse(data);

  if (!res.success) {
    return {
      success: false,
      errors: res.error.errors,
      data: {},
    };
  }
  return {
    success: true,
    errors: {},
    data: res.data,
  };
};

// Course validation
const course = z.object({
  title: z.string().min(4).max(30),
  description: z.string().min(5),
  teacher_id: z.string(),
});

export const courseValidation = (data) => {
  const res = course.safeParse(data);

  if (!res.success) {
    return {
      success: false,
      errors: res.error.errors,
      data: {},
    };
  }
  return {
    success: true,
    errors: {},
    data: res.data,
  };
};
