// content/cs103-2-1.ts
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
  title: "Digital Logic and Data Representation",
  description: "Discover the fundamentals of how computers work, and explore the essential concepts that drive modern technology",
  imagePath: "/courses/cs103/digital-logic.svg",

  sections: [
    {
      id: "Digital Logic and Data Representation", // Removed extra space at start
      title: "Digital Logic and Data Representation",
      items: [
        {
          title: "What is Data Logic?", // Fixed extra question mark
          sectionId: "what-is-data-logic",
          content: `Digital and computer architecture is the foundation of how computers work. At a high level, it refers to the systems and structures that allow a computer to perform tasks, process data, and run software. If you're new to computers, think of it like the blueprint for building a machine that can take instructions (from you or a program), process them, and give you the results.`
        },
        {
          title: "Binary Number System",
          sectionId: "binary-number-system",
          content: `The binary system is the language of computers. Instead of using 10 digits (0–9) like the decimal system we're familiar with, the binary system uses only two digits: 0 and 1.

          How Binary Works:

          Each digit in binary represents a power of 2, starting from the right (just like decimal uses powers of 10).

          For example, the binary number 1011 can be broken down like this:

          * The rightmost digit (1) represents 2^0, or 1
          * The next digit (1) represents 2^1, or 2
          * The next digit (0) represents 2^2, or 4
          * The leftmost digit (1) represents 2^3, or 8

          To find the decimal (base 10) value of 1011 in binary, add up these values: 8+0+2+1=11.

          The binary system is efficient for computers because it aligns well with their electrical states (on/off, high/low), making it ideal for data processing and storage.`
        },
        {
          title: "Translating to Binary",
          sectionId: "translating-to-binary",
          content: `Earlier, we went over the basics of the binary number system. Now, let's take a closer look at how it works in practice when converting a decimal (base-10) number to binary (base-2), the language computers understand.

          The easiest way to understand binary is to break down the process into simple steps. Let's say you want to find the binary representation of the number 121. Here's the simplest way to do it—by finding which powers of 2 add up to 121.

          Step-by-Step Conversion of 121 to Binary:

          * First Step: Initial Setup
            * Identify the largest power of 2 that fits into 121 without going over
            * In this case, that's 64 (as 128 would be too large)

          * Second Step: Subtraction Process
            * Subtract 64 from 121 to get 57
            * Find the next largest power of 2 that fits (32)
            * Subtract 32 from 57, leaving 25

          * Third Step: Continue Breaking Down
            * The largest power of 2 in 25 is 16
            * Subtracting 16 leaves 9
            * The largest power of 2 in 9 is 8
            * Subtracting 8 leaves 1
            * Finally, we use 1 itself

          * Final Step: Building the Binary Number
            * We used: 64, 32, 16, 8, and 1
            * These correspond to place values: 1111001
          \n\n
          // add image here and center the image`,
          imagePath: "/courses/cs103/binary.svg"
        },
        {
          title: "Hexadecimal Number System",
          sectionId: "hexadecimal-number-system",
          content: `The hexadecimal (hex) system is another way of representing numbers, commonly used in computer science as a more readable alternative to binary. While binary is what computers use internally, hexadecimal provides a more compact and human-friendly way to represent the same information.
        
        How Hexadecimal Works:
        
          \n\n* Basic Structure
          * Hexadecimal is a base-16 number system
          * Uses 16 different symbols: 0-9 and A-F
          * A represents 10, B represents 11, up to F representing 15
        
          \n\n* Binary to Hex Conversion
          * Each hex digit represents exactly four binary digits (bits)
          * This makes conversion between binary and hex straightforward
          * Examples:
            * Binary 1111 = Hex F
            * Binary 1010 = Hex A
            * Binary 0101 = Hex 5
        
          \n\n* Practical Applications
          * Memory Addresses: Programmers use hex to represent memory locations
          * Color Codes: Web developers use hex for RGB colors (e.g., #FF0000 for red)
          * Binary Shorthand: Instead of writing 1111 1111, we can write FF
          
        \n\n
        // add image here and center the image
        \n\n

        The hexadecimal system bridges the gap between human-readable numbers and computer binary, making it an essential tool in computer science and programming.`,
          imagePath: "/courses/cs103/hex-table.svg"
        },
      ]
    }
  ]
};

