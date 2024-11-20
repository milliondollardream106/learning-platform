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

// content/cs103-1-1.ts
export const lessonContent: LessonContent = {
  courseCode: "CS103",
  unit: "Unit 2",
  title: "Logic Gates",
  description: "Explore the fundamentals of how computers work, from binary signals to the logic gates that power modern technology.",
  imagePath: "/courses/cs103/logic.svg",

  sections: [
    {
      id: "logic-gates",
      title: "Logic Gates",
      items: [
        {
          title: "How Do Computers Use Binary Signals?",
          sectionId: "how-do-computers-use-binary-signals",
          content: `At the heart of every computer, information is stored and processed using electrical signals that represent binary values—1 and 0. These signals come in two states: high voltage (for 1) and low voltage (for 0). For example, a 3-volt signal might represent a binary 1, while 0.5 volts represent a binary 0.

          These two states are the foundation of all digital computing. But how can computers perform complex tasks with just these two values? The answer lies in logic gates, which perform operations on binary inputs to create outputs that help drive computation.`,
        },

        {
          title: "What Are Logic Gates?",
          sectionId: "what-are-logic-gates",
          content: `Logic gates are the fundamental building blocks of digital circuits. They take binary inputs (1s and 0s) and produce binary outputs according to specific rules. These gates are the reason computers can perform a wide variety of tasks, from basic arithmetic to complex decision-making.

          The most common types of logic gates include:
          
          \n\n* AND: Outputs 1 only if both inputs are 1.
          \n\n* OR: Outputs 1 if at least one input is 1.
          \n\n* NOT: Outputs the inverse of the input.
          \n\n* NAND: Outputs 0 only if both inputs are 1.
          \n\n* NOR: Outputs 1 only if both inputs are 0.
          \n\n* XOR (Exclusive-OR): Outputs 1 if exactly one input is 1.
          \n\n* XNOR (Exclusive-NOR): Outputs 1 if both inputs are the same.

          These gates form the foundation of more complex operations inside the computer.`,
        },

        {
          title: "The AND Gate",
          sectionId: "the-and-gate",
          content: `The AND gate outputs 1 only if both inputs are 1. If any input is 0, the output is 0. This gate is similar to the behavior of two switches controlling a light: the light turns on (output = 1) only if both switches are turned on (input = 1).

          In algebraic terms, the AND function is equivalent to multiplication. If A and B are the inputs, the output is calculated as A * B. For example:
          \n\n* If A = 1 and B = 1, the result is 1.
          \n\n* If A = 1 and B = 0, the result is 0.
          
          Here's an image of an AND gate in action:

          \n\n
          // add image here and center the image
          \n\n
          `,
          imagePath: "/courses/cs103/gates/and.svg",
        },

        {
          title: "The OR Gate",
          sectionId: "the-or-gate",
          content: `The OR gate outputs 1 if at least one input is 1. It only outputs 0 if both inputs are 0. Think of it like a light that turns on if either of two switches is flipped to "on."

          The OR gate is similar to addition in algebra. If A or B is 1, the result is 1. For example:
          \n\n* If A = 0 and B = 1, the result is 1.
          \n\n* If A = 1 and B = 0, the result is 1.
          
          Let’s explore the OR gate with an image:
          
          \n\n
          // add image here and center the image
          \n\n`,
          imagePath: "/courses/cs103/gates/or.svg",
        },

        {
          title: "The NOT Gate",
          sectionId: "the-not-gate",
          content: `The NOT gate, also called an inverter, outputs the opposite of the input. If the input is 1, the output is 0, and if the input is 0, the output is 1. It is a fundamental operation in digital logic.

          Algebraically, the NOT gate is represented by negation. If A is the input, the output is written as NOT A or A'.

          Example:
            \n\n* If A = 1, the output is 0.
            \n\n* If A = 0, the output is 1.

          Here's an image of the NOT gate:

          \n\n
          // add image here and center the image
          \n\n
          `,
          imagePath: "/courses/cs103/gates/not.svg",
        },

        // Add these items to your sections array
        {
          title: "The NAND Gate",
          sectionId: "the-nand-gate",
          content: `The NAND (NOT-AND) gate is one of the most fundamental logic gates in computer science. In fact, any other logic gate can be built using only NAND gates, making it a universal gate.

            * How NAND Works
              * Output is false (0) only when both inputs are true (1)
              * It's like an AND gate followed by a NOT gate
              * Symbol: Usually shown as an AND gate with a small circle at the output

            * Truth Table
              * Input A | Input B | Output
              * 0 | 0 | 1
              * 0 | 1 | 1
              * 1 | 0 | 1
              * 1 | 1 | 0

            * Real-World Applications
              * Computer Memory (RAM)
                * NAND flash memory in your phone and USB drives
                * Each memory cell is built using NAND gates
              * Digital Security Systems
                * Two-factor authentication: Access denied unless BOTH factors fail
              * Gaming Console Safety
                * System won't start if BOTH temperature AND power level are too high

            // add image here and center the image`,
          imagePath: "/courses/cs103/gates/nand.svg"
        },

        {
          title: "The NOR Gate",
          sectionId: "the-nor-gate",
          content: `The NOR (NOT-OR) gate is another universal gate, meaning like NAND, it can be used to create any other logic gate. Think of it as an OR gate followed by a NOT gate.

            * How NOR Works
              * Output is true (1) only when both inputs are false (0)
              * It gives the opposite result of an OR gate
              * Symbol: An OR gate with a small circle at the output

            * Truth Table
              * Input A | Input B | Output
              * 0 | 0 | 1
              * 0 | 1 | 0
              * 1 | 0 | 0
              * 1 | 1 | 0

            * Practical Examples
              * Smart Home Systems
                * "Turn on lights when it's NOT sunny AND NOT daytime"
              * Mobile Device Power Management
                * "Enter power saving mode when battery is NOT charging AND NOT full"
              * Gaming Achievement Systems
                * "Unlock 'Stealth Master' when player is NOT detected AND NOT making noise"

            // add image here and center the image`,
          imagePath: "/courses/cs103/gates/nor.svg"
        },

        {
          title: "The XOR Gate",
          sectionId: "the-xor-gate",
          content: `The XOR (Exclusive OR) gate is unique because it only outputs true when inputs are different. Think of it as "either but not both."

            * How XOR Works
              * Output is true (1) when inputs are different
              * Output is false (0) when inputs are the same
              * Used extensively in arithmetic operations and error detection

            * Truth Table
              * Input A | Input B | Output
              * 0 | 0 | 0
              * 0 | 1 | 1
              * 1 | 0 | 1
              * 1 | 1 | 0

            * Real-Life Applications
              * Password Change Security
                * New password must be different from old password
              * Binary Addition
                * Used in computer arithmetic for adding bits
              * Error Detection
                * Parity checking in data transmission
              * Light Switch Systems
                * Two-way light switches in your home

            * Fun Example: The Light Switch Problem
              * Two switches controlling one light
              * Light changes state when either switch is flipped
              * This is exactly how XOR works!

            // add image here and center the image`,
          imagePath: "/courses/cs103/gates/xor.svg"
        },

        {
          title: "The XNOR Gate",
          sectionId: "the-xnor-gate",
          content: `The XNOR (Exclusive NOR) gate, also known as logical equality, outputs true only when both inputs are the same. It's the opposite of XOR.

            * How XNOR Works
              * Output is true (1) when inputs are the same
              * Output is false (0) when inputs are different
              * Symbol: An XOR gate with a small circle at the output

            * Truth Table
              * Input A | Input B | Output
              * 0 | 0 | 1
              * 0 | 1 | 0
              * 1 | 0 | 0
              * 1 | 1 | 1

            * Practical Applications
              * Password Confirmation
                * Checking if "new password" matches "confirm password"
              * Data Verification
                * Ensuring data hasn't changed during transmission
              * Biometric Security
                * Matching stored and scanned fingerprints
              * Game State Synchronization
                * Checking if client and server states match

            * Interesting Example: Match Detection
              * Dating apps matching preferences
              * Both users must like similar things for a match
              * XNOR logic determines compatibility!

            // add image here and center the image

            Remember: These complex gates (NAND, NOR, XOR, XNOR) are the building blocks of modern computers. While they might seem abstract, they're working behind the scenes in every digital device you use!`,
          imagePath: "/courses/cs103/gates/xnor.svg"
        }
      ],
    },
  ],
};
