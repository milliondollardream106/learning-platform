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
    title: "Virtual Memory",
    description: "Explore the concepts of virtual memory, a crucial system that extends the capabilities of physical memory and provides memory management features essential for modern computing systems.",
    imagePath: "/courses/cs103/virtual.svg",
  
    sections: [
      {
        id: "Virtual Memory",
        title: "Virtual Memory",
        items: [
          {
            title: "What is Virtual Memory?",
            sectionId: "what-is-virtual-memory",
            content: `Virtual memory is a memory management technique that provides an abstraction of the computer's physical memory resources. This system creates an illusion of a larger available memory space by utilizing both physical RAM and secondary storage (typically hard drive space) to execute programs.
            \n\n\  
            At its core, virtual memory implements a mapping system between virtual addresses used by programs and physical addresses in RAM. This mapping is managed by the Memory Management Unit (MMU), a hardware component that translates virtual addresses to physical addresses during program execution.
             \n\n\ 
            Virtual memory operates by dividing memory into fixed-size units called pages. When a program runs, its pages can be located either in physical RAM or on disk in an area called the page file or swap space. This organization allows the system to execute programs larger than the available physical memory.`
          },
  
          {
            title: "Page Tables and Address Translation",
            sectionId: "page-tables-and-address-translation",
            content: `The virtual memory system maintains page tables to track the location of memory pages and manage address translation. These tables contain mappings between virtual page numbers and physical frame numbers, along with status information for each page.
            \n\n\
            The address translation process involves several steps. When a program accesses memory using a virtual address, the MMU breaks this address into a virtual page number and an offset. The virtual page number is used to look up the corresponding physical frame in the page table, while the offset determines the specific location within that frame.
            \n\n\
            To improve translation efficiency, most systems implement a Translation Lookaside Buffer (TLB), a special cache that stores recently used address translations. The TLB significantly reduces the overhead of virtual-to-physical address translation by avoiding frequent page table lookups.`
          },
  
          {
            title: "Benefits and Drawbacks",
            sectionId: "benefits-and-drawbacks",
            content: `Virtual memory provides several crucial advantages for modern computing systems while also presenting certain challenges:
            \n\n\
            \n\n\
            Primary Benefits:
            \n\n* Memory Isolation: Provides each process with its own address space, enhancing system security and stability
            \n\n* Efficient Memory Usage: Allows running programs larger than physical memory by swapping pages
            \n\n* Memory Protection: Prevents processes from accessing memory allocated to other processes
            \n\n* Simplified Programming: Developers can write code without concern for physical memory constraints
            \n\n\
            \n\n\
            Key Challenges:
            \n\n* Performance Overhead: Address translation and page table management require additional processing time
            \n\n* Page Faults: Accessing data not currently in RAM causes delays while loading from disk
            \n\n* Memory Fragmentation: Can occur over time, requiring periodic system optimization
            \n\n\
            \n\n\
            The implementation of virtual memory represents a careful balance between these benefits and drawbacks. Modern operating systems employ sophisticated algorithms to minimize the impact of the challenges while maximizing the advantages of virtual memory management.`
          }
        ]
      }
    ]
  };