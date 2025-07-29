import ThemeToggle from './ThemeToggle';
import { useState, useRef, useEffect } from 'preact/hooks';



type Props = {
  section?: string | null;
  magazineTitle?: string; // ← new prop
};


export default function Nav({ section, magazineTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('#hamburger')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  
  return (
    <div class="relative z-40 group">
      {/* NAV BAR */}
      <nav class="relative z-50 h-[75px] bg-aopa-dkblue shadow-md flex justify-between items-stretch">
        {/* LEFT SIDE NAV LINKS — hover target */}
        <div class="flex text-white h-full">
          <ul class="flex h-full font-heading">
            <li class="relative px-6 pr-[2.5rem] h-full clip-angle flex items-center bg-aopa-ltblue text-2xl tracking-wide">
              <a href="/">AOPA</a>
            </li>
            {section === 'editorial' && (
              <li class="px-4 flex items-center h-full text-2xl tracking-wide">
                <a href="#">NEWS</a>
              </li>
            )}
            {section === 'magazine' && (
              <li class="">
                <a class="px-4 flex items-center h-full text-2xl tracking-wide" href="#">
                  MAGAZINE
                  {magazineTitle && <span class="ml-2 text-lg text-teal-300 font-body capitalize"> / {magazineTitle}</span>}
                </a>
              </li>
            )}
          </ul>
        </div>
        <div class="flex">
          <ThemeToggle/>
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            id="hamburger"
            class={`ml-6 relative w-[75px] h-[75px] bg-aopa-ltblue flex flex-col justify-center items-center z-60 ${
              isOpen ? 'open' : ''
            }`}
          >
            <span class="bar transition-transform duration-300 absolute w-8 h-1 rounded-lg bg-white top-[28px]"></span>
            <span class="bar transition-opacity duration-300 absolute w-8 h-1 rounded-lg bg-white top-[36px]"></span>
            <span class="bar transition-transform duration-300 absolute w-8 h-1 rounded-lg bg-white top-[44px]"></span>
          </button>
        </div>

      </nav>

      {/* DROPDOWN: now a sibling of nav, not a child */}
      <div class="leading-none absolute top-full left-0 w-screen bg-aopa-dkblue text-white shadow-md transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-40">
        <div class="max-w-7xl mx-auto p-6 grid grid-cols-6 gap-8">
          <div class="border-r-2 border-gray-400">                    
            <img src="/images/ui/logo-small-white.svg" alt="Logo" class="px-10 block dark:hidden mb-4" />
            <ul class="space-y-3 text-center">
              <li><span class="text-gray-400 cursor-not-allowed">About AOPA</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Member Services</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Join AOPA</span></li>
            </ul>
          </div>
          <div>
              <h3 class="font-bold text-4xl mb-2 font-subheading cursor-not-allowed">News & Media</h3>
            <ul class="space-y-3">
              <li><a href="/news/home">News Home</a></li>
              <li><span class="text-gray-400 cursor-not-allowed">Most Recent</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Most Read</span></li>
              <li><span class="text-teal-400 cursor-not-allowed">View all</span></li>              
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-4xl mb-2 font-subheading cursor-not-allowed">Publications</h3>
            <ul class="space-y-3">
              <li><a href="/magazine/home">Magazines</a></li>
              <li><span class="text-gray-400 cursor-not-allowed">Podcasts</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Newsletters</span></li>
              <li><span class="text-teal-400 cursor-not-allowed">View all</span></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-4xl mb-2 font-subheading cursor-not-allowed">Training & Safety</h3>
            <ul class="space-y-3">
              <li><span class="text-gray-400 cursor-not-allowed">Learn to Fly</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Air Safety Institute</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">CFI Renewel(eFirc)</span></li>
              <li><span class="text-teal-400 cursor-not-allowed">View all</span></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-4xl mb-2 font-subheading cursor-not-allowed">Events</h3>
            <ul class="space-y-3">
              <li><span class="text-gray-400 cursor-not-allowed">AOPA Events Calendar</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Buckeye Fly In</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Props & Pistons</span></li>
              <li><span class="text-teal-400 cursor-not-allowed">View all</span></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-4xl mb-2 font-subheading cursor-not-allowed">Membership</h3>
            <ul class="space-y-3">
              <li><span class="text-gray-400 cursor-not-allowed">Member Services</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Join AOPA</span></li>
              <li><span class="text-gray-400 cursor-not-allowed">Item 3C</span></li>
              <li><span class="text-teal-400 cursor-not-allowed">View all</span></li>
            </ul>
          </div>

        </div>
      </div>
      {/* Right-side drawer that toggles from hamburger */}
<div
  ref={drawerRef}
  class={`fixed top-[75px] right-0 w-64 h-[calc(100vh-75px)] bg-aopa-dkgrey text-white p-6 transform transition-transform duration-300 z-50 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
      
    
  <ul class="space-y-4">
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
    <li><a href="#">Logout</a></li>
  </ul>
</div>

    </div>
    
  );
}
