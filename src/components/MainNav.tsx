import { useState } from 'preact/hooks';
import ThemeToggle from './ThemeToggle';

type Props = {
  section?: string | null;
};

export default function Nav({ section }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);


  
  return (
    <div class="relative z-40 group">
      {/* NAV BAR */}
      <nav class="relative z-50 h-[75px] bg-aopa-dkblue shadow-md flex justify-between items-stretch">
        {/* LEFT SIDE NAV LINKS — hover target */}
        <div class="flex text-white h-full">
          <ul class="flex h-full font-heading">
            <li class="relative px-6 pr-[2.5rem] h-full clip-angle flex items-center bg-aopa-ltblue text-xl">
              <a href="/">AOPA</a>
            </li>
            {section === 'editorial' && (
              <li class="px-4 flex items-center h-full text-xl">
                <a href="#">NEWS</a>
              </li>
            )}
          </ul>

        </div>
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          id="hamburger"
          class={`relative w-[75px] h-[75px] bg-aopa-ltblue flex flex-col justify-center items-center z-60 ${
            isOpen ? 'open' : ''
          }`}
        >
            <span class="bar transition-transform duration-300 absolute w-8 h-1 rounded-lg bg-white top-[28px]"></span>
            <span class="bar transition-opacity duration-300 absolute w-8 h-1 rounded-lg bg-white top-[36px]"></span>
            <span class="bar transition-transform duration-300 absolute w-8 h-1 rounded-lg bg-white top-[44px]"></span>
        </button>
      </nav>

      {/* DROPDOWN: now a sibling of nav, not a child */}
      <div class="absolute top-full left-0 w-screen bg-white text-black shadow-md transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-40">
        <div class="max-w-7xl mx-auto p-6 grid grid-cols-3 gap-8">
          <div>
            <h3 class="font-bold text-lg mb-2">Category 1</h3>
            <ul class="space-y-1">
              <li><a href="#">Item 1A</a></li>
              <li><a href="#">Item 1B</a></li>
              <li><a href="#">Item 1C</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">Category 2</h3>
            <ul class="space-y-1">
              <li><a href="#">Item 2A</a></li>
              <li><a href="#">Item 2B</a></li>
              <li><a href="#">Item 2C</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">Category 3</h3>
            <ul class="space-y-1">
              <li><a href="#">Item 3A</a></li>
              <li><a href="#">Item 3B</a></li>
              <li><a href="#">Item 3C</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Right-side drawer that toggles from hamburger */}
<div
  class={`fixed top-[75px] right-0 w-64 h-[calc(100vh-75px)] bg-aopa-dkgrey text-white p-6 transform transition-transform duration-300 z-50 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <ul class="space-y-4">
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
    <li><a href="#">Logout</a></li>
    <li>        
      <ThemeToggle />
    </li>
  </ul>
</div>

    </div>
    
  );
}
