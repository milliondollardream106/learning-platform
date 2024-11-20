
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
  
  // content/cs103-3-2.ts
  export const lessonContent: LessonContent = {
    courseCode: "CS103",
    unit: "Unit 3",
    title: "Random Access Memory (RAM)",
    description: "Explore the principles and operation of Random Access Memory (RAM), a crucial component in computer systems that provides fast, temporary storage for active programs and data. Understanding RAM is essential for comprehending how computers manage and access information during operation.",
    imagePath: "/courses/cs103/ram.svg",
  
    sections: [
      {
        id: "Random Access Memory (RAM)",
        title: "Random Access Memory (RAM)",
        items: [
          {
            title: "What is RAM?",
            sectionId: "what-is-ram",
            content: `Random Access Memory (RAM) is a fundamental component of computer systems that provides high-speed, temporary storage for data and programs currently in use. The term "random access" indicates that any memory location can be accessed directly and in the same amount of time, regardless of its physical position in memory.
             \n\n\ 
            RAM functions as the computer's working memory, storing active programs, operating system components, and data being processed. This volatile memory maintains its contents only while power is supplied, offering rapid access speeds essential for system performance.
              \n\n\
            The direct relationship between RAM and system performance is significant. When a program runs, it is loaded from permanent storage into RAM, allowing the CPU to quickly access and execute instructions. This rapid access capability makes RAM a critical factor in determining overall system responsiveness and processing speed.`
          },
  
          {
            title: "RAM Cells",
            sectionId: "ram-cells",
            content: `RAM cells are the basic storage units within memory modules, each capable of storing one bit of data. These cells are organized in a matrix structure, with each cell having a unique address for access. Modern RAM cells utilize transistor-capacitor pairs in DRAM or flip-flops in SRAM to store binary data.
             \n\n\ 
            The structure of a RAM cell determines its characteristics. DRAM cells use a single transistor and capacitor, making them compact but requiring periodic refresh cycles to maintain data. SRAM cells use multiple transistors in a flip-flop configuration, providing faster access but requiring more space and power.
             \n\n\ 
            Each RAM cell connects to word lines and bit lines in the memory array. Word lines activate rows of cells for access, while bit lines transfer data to and from the cells. This arrangement enables precise addressing and rapid data transfer while maintaining data integrity through various control mechanisms.`
          },
  
          {
            title: "RAM Chips",
            sectionId: "ram-chips",
            content: `RAM chips are integrated circuits that contain millions or billions of memory cells organized into addressable locations. These chips are manufactured using advanced semiconductor processes and are designed to optimize data access speed and reliability.
             \n\n\ 
            Modern RAM chips are organized into banks and arrays to improve access efficiency. Each chip contains multiple memory banks that can operate independently, allowing parallel access operations. The internal organization includes row and column decoders, sense amplifiers, and input/output buffers that facilitate data transfer.
              \n\n\
            RAM chips connect to the system through the memory bus, which carries address signals, data, and control information. The memory controller manages these connections, coordinating data transfer between RAM and other system components. This interface is crucial for maintaining proper timing and ensuring reliable data transmission.`
          },
  
          {
            title: "Types of RAM",
            sectionId: "types-of-ram",
            content: `Computer systems employ several types of RAM, each designed for specific purposes and offering different performance characteristics. The two primary categories are Dynamic RAM (DRAM) and Static RAM (SRAM).
              \n\n\
            Dynamic RAM (DRAM) serves as the main memory in most computer systems. Key characteristics of DRAM include:\n\n* Higher storage density and lower cost per bit\n\n* Requires regular refresh cycles to maintain data\n\n* Lower power consumption in standby mode\n\n* Used for large-capacity main memory modules
             \n\n\ 
            Static RAM (SRAM) typically functions as cache memory. SRAM features:\n\n* Faster access speeds than DRAM\n\n* No refresh cycles required\n\n* Higher power consumption and cost\n\n* Used in CPU cache levels and high-speed buffers
            \n\n\ 
            \n\n\
            Modern systems also implement various DRAM technologies such as DDR4 and DDR5 (Double Data Rate), which provide increased bandwidth and improved power efficiency. These advanced memory types continue to evolve, offering higher performance and reliability for contemporary computing needs.`
          }
        ]
      }
    ]
  };