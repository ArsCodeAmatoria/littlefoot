'use client';

import { demos, type Item } from '#/lib/demos';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { PawPrint, ExternalLink } from 'lucide-react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-7 w-7 flex items-center justify-center">
            <PawPrint size={24} color="#53C03F" />
          </div>

          <h3 className="font-['Shadows_Into_Light_Two'] text-xl tracking-wide text-gray-400 group-hover:text-gray-50">
            lilfoot
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="flex flex-col h-full space-y-6 px-2 pt-5 pb-4">
          <div className="flex-grow">
            {demos.map((section) => {
              return (
                <div key={section.name} className="mb-6">
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                    <div>{section.name}</div>
                  </div>

                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <GlobalNavItem key={item.slug} item={item} close={close} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bigfoot Crane Attribution */}
          <div className="mt-auto pt-4 border-t border-gray-800">
            <div className="px-3 py-2 text-xs text-gray-500">
              <p className="mb-2">© {new Date().getFullYear()} lilfoot</p>
              <div>
                <a 
                  href="https://bigfootcrane.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <span>Made by Bigfoot Crane</span>
                  <ExternalLink size={12} className="ml-1 inline-block" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
