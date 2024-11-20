// content/cs103-2-2.ts
interface LessonContent {
  courseCode: string;
  unit: string;
  title: string;
  description: string;
  imagePath: string;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  items: SectionItem[];
}

interface SectionItem {
  title: string;
  sectionId: string;
  content?: string;
  imagePath?: string | null;
}

export const lessonContent: LessonContent = {
  courseCode: "CS103",
  unit: "Unit 2",
  title: "Boolean Algebra",
  description: "Understanding Boolean algebra is essential in computer science as it provides the mathematical foundation for digital logic and computer operations. This course explores how computers process logical decisions through Boolean principles.",
  imagePath: "/courses/cs103/boolean.svg",

  sections: [
    {
      id: "Boolean Algebra",
      title: "Boolean Algebra",
      items: [
        {
          title: "What is Boolean Algebra?",
          sectionId: "what-is-boolean-algebra",
          content: `Boolean algebra, developed by mathematician George Boole, forms the mathematical foundation of digital computing. This branch of mathematics operates on two-valued variables (true/false or 1/0) and provides the logical framework that enables computer systems to make decisions and process information.
          \n\n
          In modern computing, Boolean algebra manifests in various forms, from the basic logic gates in processors to high-level programming constructs. Digital circuits implement Boolean operations to process binary data, while programming languages use Boolean expressions for control flow and decision-making processes.
          \n\n
          The significance of Boolean algebra extends across computer science disciplines. It enables digital circuit design, forms the basis of programming logic, and facilitates database operations. Understanding Boolean algebra is crucial for comprehending how computers process information and make logical decisions.`,
          imagePath: "/courses/cs103/boolean-basics.svg"
        },
        {
          title: "Basic Operations in Boolean Algebra",
          sectionId: "basic-operations",
          content: `Boolean algebra comprises three fundamental operations that serve as building blocks for all logical computations in digital systems.
          \n\n
          The AND operation, denoted as A·B or AB, represents logical conjunction. This operation yields true (1) only when all inputs are true. In digital systems, AND operations control conditional execution where multiple conditions must be satisfied simultaneously.
          \n\n
          The OR operation, written as A + B, implements logical disjunction. This operation produces true (1) when any input is true. OR operations enable systems to process alternative conditions, allowing multiple valid paths in logical decision-making.
          \n\n
          The NOT operation, represented as ¬A or A̅, performs logical negation. This unary operation inverts its input, converting true to false or false to true. NOT operations are essential for implementing logical complements and creating conditional exclusions in digital systems.
          \n\n
          These operations combine to form more complex logical expressions, enabling sophisticated decision-making capabilities in computer systems. Their implementation through digital logic gates forms the basis of all computational processes.`,
          imagePath: "/courses/cs103/boolean-operations.svg"
        },
        {
          title: "Truth Tables and Logic Gates",
          sectionId: "truth-tables-and-gates",
          content: `Truth tables provide a systematic method for analyzing Boolean operations by displaying all possible input combinations and their corresponding outputs. These tables are essential tools for understanding and verifying logical operations in digital systems.

          For the AND operation:\n\n* Input A | Input B | Output\n\n* 0 | 0 | 0\n\n* 0 | 1 | 0\n\n* 1 | 0 | 0\n\n* 1 | 1 | 1

          For the OR operation:\n\n* Input A | Input B | Output\n\n* 0 | 0 | 0\n\n* 0 | 1 | 1\n\n* 1 | 0 | 1\n\n* 1 | 1 | 1
          \n\n
          \n\n
          These truth tables represent the fundamental behavior of logic gates in digital circuits. Understanding these relationships is crucial for digital system design and computer architecture. Logic gates implement these Boolean operations in hardware, forming the basis for all digital computations.`,
          imagePath: "/courses/cs103/truth-tables.svg"
        },
        {
          title: "Boolean Laws and Simplification",
          sectionId: "boolean-laws",
          content: `Boolean algebra follows specific laws that enable the simplification of logical expressions. These laws are fundamental for optimizing digital circuits and improving computational efficiency.
          \n\n
          The Identity Laws establish basic relationships: the AND operation with true (1) or the OR operation with false (0) leaves a value unchanged. These laws are essential for understanding basic Boolean behavior.
          \n\n
          Complement Laws define the relationship between a value and its negation: a value AND its complement equals false (0), while a value OR its complement equals true (1). These principles are crucial for logical completeness.
          \n\n
          Commutative Laws state that the order of operands doesn't affect the result in AND and OR operations. This property simplifies the analysis and implementation of logical circuits.
          \n\n
          The application of these laws enables the optimization of logical expressions, leading to more efficient circuit designs and improved computational processes. Understanding these principles allows computer scientists to develop more effective and resource-efficient systems.`,
          imagePath: "/courses/cs103/boolean-laws.svg"
        }
      ]
    }
  ]
};