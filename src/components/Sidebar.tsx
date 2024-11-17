"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';

interface SidebarItem {
  title: string;
  href?: string;
  items?: string[];
}

interface SidebarSection {
  id: string;
  title: string;
  items: SidebarItem[];
}

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  sections: SidebarSection[];
  currentPage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  sections,
  currentPage
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    sections.forEach(section => {
      initialState[section.id] = section.id === currentPage;
    });
    return initialState;
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <div className="flex h-full items-center">
        <aside
          className={`
            pointer-events-auto
            relative bg-white shadow-lg 
            transition-all duration-300 ease-in-out
            rounded-r-lg
            overflow-hidden
            max-h-[80vh]
    
            h-full
            ${isOpen ? 'w-64' : 'w-0'}
          `}
        >
          <div className="absolute right-4 top-4 z-10">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-full overflow-y-auto">
            <div className="p-4 mt-8">
              {sections.map((section) => (
                <div key={section.id} className="mb-4">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {expandedSections[section.id] ? (
                      <ChevronDown size={16} className="mr-2 text-blue-500" />
                    ) : (
                      <ChevronRight size={16} className="mr-2 text-blue-500" />
                    )}
                    <span className="font-medium">{section.title}</span>
                  </button>
                  
                  {expandedSections[section.id] && (
                    <div className="ml-6 mt-2 space-y-2">
                      {section.items.map((item) => (
                        <div key={item.title}>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                            >
                              {item.title}
                            </Link>
                          ) : (
                            <div className="p-2 text-sm text-gray-600">
                              {item.title}
                              {item.items && (
                                <ul className="ml-4 mt-1 space-y-1">
                                  {item.items.map((subItem) => (
                                    <li 
                                      key={subItem} 
                                      className="text-gray-500 hover:text-gray-700 cursor-pointer py-1 px-2 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                      {subItem}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;