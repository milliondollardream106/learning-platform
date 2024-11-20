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
    title: "Data Representation in Computers",
    description: "This course introduces the fundamental concepts of how computers store and process different types of data. Understanding data representation is essential for computer science students as it forms the foundation of how computers operate and handle information at the hardware level.",
    imagePath: "/courses/cs103/data-representation.svg",
  
    sections: [
      {
        id: "data-representation-fundamentals",
        title: "Data Representation Fundamentals",
        items: [
          {
            title: "Binary: The Foundation of Digital Data",
            sectionId: "binary-foundation",
            content: `At its core, a computer operates using binary, a number system that uses only two digits: 0 and 1. Each binary digit, called a bit, represents one of two possible states in the computer's electronic circuits. These states are implemented as different voltage levels in the computer's hardware.
             \n\n 
            The binary system provides a reliable foundation for digital computing because it offers clear distinction between states and excellent noise immunity in electronic circuits. This reliability is crucial for performing accurate computations and storing data.
            \n\n  
            Binary serves as the basis for all data representation in computers. Through various encoding schemes, these simple binary patterns can represent complex data types such as numbers, text, and even multimedia content. The process begins with understanding how basic data types are encoded into binary patterns.
            \n\n  
            In computer architecture, binary operations are implemented through digital logic circuits, which follow the principles of Boolean algebra. These fundamental operations enable computers to perform calculations and process data efficiently at the hardware level. This connection between binary representation and hardware implementation is fundamental to understanding computer systems.`
          },
  
          {
            title: "Integer Representation",
            sectionId: "integer-representation",
            content: `Integer representation in computer systems uses a fixed number of bits, typically 32 or 64, to store whole numbers. Modern computers implement two primary methods for representing integers: unsigned and signed numbers.
              \n\n
            Unsigned integers are used when only positive numbers are needed. In an 8-bit system, unsigned integers can represent values from 0 to 255. This representation is particularly useful for quantities that cannot be negative, such as memory addresses or array indices.
            \n\n  
            Signed integers use the Two's Complement system to represent both positive and negative numbers. In an 8-bit signed system, values from -128 to +127 can be represented. The leftmost bit serves as the sign bit, where 0 indicates a positive number and 1 indicates a negative number.
             \n\n 
            Two's Complement is significant in computer architecture because it simplifies arithmetic operations. Addition and subtraction can be performed using the same hardware circuitry for both positive and negative numbers. To negate a number in Two's Complement, we invert all bits and add 1 to the result. This property makes Two's Complement particularly efficient for computer arithmetic.`
          },
  
          {
            title: "Floating-Point Representation",
            sectionId: "floating-point-representation",
            content: `Floating-point representation allows computers to work with real numbers, including those with decimal points. The IEEE 754 standard defines the format for representing these numbers in binary, ensuring consistency across different computer systems.
            \n\n
            The standard defines two primary formats for floating-point numbers. Single precision uses 32 bits and provides approximately 7 decimal digits of precision. This format is suitable for most general-purpose calculations where extreme precision isn't required. Double precision uses 64 bits and offers approximately 15 decimal digits of precision, making it appropriate for scientific calculations and financial computations.
             \n\n 
            A floating-point number consists of three components: a sign bit determining whether the number is positive or negative, an exponent for scaling the number, and a mantissa containing the significant digits. This structure is similar to scientific notation but uses base-2 rather than base-10.
            \n\n  
            Understanding floating-point representation is crucial because it can lead to precision issues in calculations. For example, some decimal numbers cannot be exactly represented in binary floating-point format, which can lead to small rounding errors in calculations. These limitations must be considered when designing software that requires precise numerical computations.`
          },
  
          {
            title: "Character Representation",
            sectionId: "character-representation",
            content: `Character representation in computers involves encoding text and symbols into binary formats. The evolution of character encoding systems reflects the growing need to represent text from different writing systems and languages.
             \n\n 
            ASCII, the American Standard Code for Information Interchange, was the first widely adopted character encoding standard. Using 7 bits, ASCII can represent 128 different characters, including the English alphabet, numbers, and basic control characters. While limited, ASCII remains important as it forms the basis for more advanced encoding systems.
             \n\n 
            Unicode has emerged as the comprehensive solution for representing text in computer systems. It provides a unique number for every character, regardless of the platform, program, or language. UTF-8, a variable-width encoding system, has become the dominant implementation of Unicode. It efficiently encodes ASCII characters in single bytes while using additional bytes as needed for other characters.
              \n\n
            Character encoding is particularly relevant in modern computing as software increasingly needs to handle multiple languages and writing systems. Understanding these encoding systems is essential for developing applications that can properly process and display text from any language.`
          },
  
          {
            title: "Data Type Conversions",
            sectionId: "data-type-conversions",
            content: `Data type conversion is a fundamental operation in computer programming where values are transformed from one data type to another. These conversions are essential for programs that must work with different types of data and perform operations between them.
            \n\n  
            Computer systems handle two types of conversions: implicit and explicit. Implicit conversions occur automatically when the compiler can safely convert one type to another without losing data. For example, converting an integer to a floating-point number. Explicit conversions, or type casting, require programmer intervention and may involve potential data loss.
            \n\n 
            When performing conversions, several important considerations must be addressed. Integer overflow occurs when a number exceeds the range of its intended data type. Precision loss happens when converting floating-point numbers to integers, where decimal places are truncated. Character encoding conversions must handle different encoding schemes correctly.
            \n\n 
            To ensure reliable program operation, developers must implement proper validation and error handling for data type conversions. This includes checking value ranges before conversion, handling potential overflow conditions, and ensuring that precision requirements are met. These practices are essential for developing robust and reliable software systems.`
          }
        ]
      }
    ]
  };