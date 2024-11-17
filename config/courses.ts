// src/config/courses.ts

export const COURSE_LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const;
export type CourseLevel = typeof COURSE_LEVELS[number];

export interface CourseSection {
  id: string;
  title: string;
  courses: Course[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  isFree?: boolean;
  image?: string;
  duration?: string;
  level?: CourseLevel;
}

// Course sections data - easy to edit
export const courseSectionsData: CourseSection[] = [
  {
    id: 'intro-cs',
    title: 'Intro to CS',
    courses: [
      {
        id: 'cs101',
        code: 'CS101',
        title: 'Introduction to Computer Science',
        description: 'Learn the fundamentals of computer science and programming concepts.',
        level: 'Beginner',
        duration: '6 weeks',
        isFree: true
      },
      {
        id: 'cs102',
        code: 'CS102',
        title: 'Computer Science Fundamentals',
        description: 'Build on your CS knowledge with advanced concepts and principles.',
        level: 'Beginner',
        duration: '8 weeks',
        isFree: true
      }
    ]
  },
  {
    id: 'core-programming',
    title: 'Core Programming',
    courses: [
      {
        id: 'cp201',
        code: 'CP201',
        title: 'Fundamentals of Programming',
        description: 'Master programming fundamentals with hands-on projects and exercises.',
        level: 'Beginner',
        duration: '8 weeks',
        isFree: true
      },
      {
        id: 'cp202',
        code: 'CP202',
        title: 'Data Structures and Algorithms',
        description: 'Learn essential data structures and algorithms for efficient programming.',
        level: 'Intermediate',
        duration: '10 weeks',
        isFree: false
      }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    courses: [
      {
        id: 'wd301',
        code: 'WD301',
        title: 'Full Stack Web Development',
        description: 'Build modern web applications using the latest technologies.',
        level: 'Intermediate',
        duration: '12 weeks',
        isFree: false
      }
    ]
  }
];