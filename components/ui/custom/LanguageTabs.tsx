'use client';

import { useState } from 'react';
import { CodeBlock } from './CodeBlock';

interface CodeExample {
  language: string;
  label: string;
  code: string;
  filename?: string;
}

interface LanguageTabsProps {
  examples: CodeExample[];
  defaultLanguage?: string;
}

export function LanguageTabs({ examples, defaultLanguage }: LanguageTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultLanguage || examples[0]?.language);

  return (
    <div className="w-full">
      {/* Modern Tab Bar */}
      <div className="flex flex-wrap gap-2 mb-0">
        {examples.map((example) => (
          <button
            key={example.language}
            onClick={() => setActiveTab(example.language)}
            className={`
              px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-all duration-200
              ${activeTab === example.language
                ? 'text-gray-900 border-gray-900 bg-white'
                : 'text-gray-500 border-transparent bg-transparent hover:text-gray-900 hover:bg-gray-50'
              }
            `}
          >
            {example.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {examples.map((example) => (
          <div
            key={example.language}
            className={`${activeTab === example.language ? 'block' : 'hidden'}`}
          >
            <CodeBlock code={example.code} language={example.language} filename={example.filename} />
          </div>
        ))}
      </div>
    </div>
  );
}
