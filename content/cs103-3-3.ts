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
    title: "The Cache",
    description: "This unit explores the fundamental principles of cache memory, its hierarchical structure, and its critical role in enhancing computer system performance through efficient data access.",
    imagePath: "/courses/cs103/cache.svg",
  
    sections: [
      {
        id: "The Cache",
        title: "The Cache",
        items: [
          {
            title: "What is Cache Memory?",
            sectionId: "what-is-cache-memory",
            content: `Cache memory is a high-speed buffer that bridges the performance gap between fast processors and relatively slower main memory. This specialized memory system stores frequently accessed data and instructions, enabling quicker access times compared to retrieving information from main memory.
             \n\n\ 
            The fundamental principle behind cache memory is temporal and spatial locality. Temporal locality refers to the tendency of recently accessed data to be accessed again soon, while spatial locality indicates that data near recently accessed locations is likely to be accessed next. Cache memory exploits these patterns to improve system performance.
             \n\n\ 
            Cache memory utilizes Static RAM (SRAM) technology, which provides faster access times than the Dynamic RAM (DRAM) used in main memory. This speed advantage comes at the cost of higher power consumption and lower storage density, making cache memory a premium resource in computer systems.`
          },
  
          {
            title: "Levels of Cache",
            sectionId: "levels-of-cache",
            content: `Modern computer architectures implement a hierarchical cache structure with multiple levels, typically labeled as L1, L2, and L3. Each level serves a specific purpose in the memory hierarchy and offers different trade-offs between speed, size, and proximity to the processor.
             \n\n\ 
            Level 1 (L1) Cache is the smallest and fastest cache, typically integrated directly into the processor core. L1 cache usually consists of separate instruction and data caches, known as the L1i (instruction) and L1d (data) caches. This separation allows simultaneous access to both instructions and data, enhancing processor performance.
              \n\n\
            Level 2 (L2) Cache is larger but slightly slower than L1. It provides an intermediate buffer between the small, fast L1 cache and larger, slower memory components. L2 cache is typically unified, storing both instructions and data, and may be shared between processor cores in multi-core systems.
             \n\n\ 
            Level 3 (L3) Cache, when present, provides an even larger shared cache that serves all processor cores. This last level of cache helps reduce access to main memory and improves performance in multi-core processors by facilitating data sharing between cores.`
          },
  
          {
            title: "How Cache Works",
            sectionId: "how-cache-works",
            content: `Cache operation involves several key mechanisms that manage data storage and retrieval. When the processor needs to access data, it first checks the cache levels in sequence, starting with L1. This process, known as a cache lookup, determines whether the required data is present in the cache.
             \n\n\ 
            Cache organization employs specific mapping techniques to store and locate data:\n\n* Direct Mapping: Each main memory location maps to exactly one cache location\n\n* Set-Associative Mapping: Memory locations can map to multiple cache locations within a set\n\n* Fully Associative Mapping: Memory locations can map to any cache location
            \n\n\  
             \n\n\
            Cache coherence becomes crucial in multi-core systems where multiple caches may contain copies of the same data. Coherence protocols ensure that all cores have a consistent view of memory by managing how cache contents are updated and shared between cores.
             \n\n\ 
            When the requested data is not found in cache (a cache miss), the system must retrieve it from a lower level of memory. Cache replacement policies determine which existing cache entries should be removed to make space for new data. Common replacement strategies include Least Recently Used (LRU) and First-In-First-Out (FIFO).
             \n\n\ 
            The effectiveness of cache memory is measured through the cache hit rate, which indicates the percentage of memory accesses that find their data in the cache. Higher hit rates indicate better cache performance and contribute to overall system efficiency.`
          }
        ]
      }
    ]
  };