import { useState } from 'react';
import { BiSun, BiSolidDownArrow } from 'react-icons/bi';
import { MdOutlineNotifications } from 'react-icons/md';
import { BsPlusCircleFill } from 'react-icons/bs';


const Navbar = () => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="flex items-center justify-end">
			<div className="relative flex gap-10 items-center">
				<div className='lg:flex gap-3 items-center text-[#AFB1C1] hidden '>
					<BiSun />
					<p>US Stock market opens in 3 hours</p>
				</div>

				{/* Main Wallet dropdown */}
				<div className="relative group" onClick={toggleDropdown}>
					<div className="flex items-center cursor-pointer">
						<p className="mr-2">Main Wallet</p>
						<BiSolidDownArrow size={10} className={`transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0  text-[#AFB1C1]'} transition-transform`} />
					</div>
					{isDropdownOpen && (
						<ul className="absolute right-0 mt-2 py-2 px-4 bg-white border border-gray-300 rounded shadow">
							<li>Option 1</li>
							<li>Option 2</li>
							<li>Option 3</li>
						</ul>
					)}
				</div>
				<div className="relative">
					<MdOutlineNotifications size={25} />
					<div className="w-2 h-2 bg-red-500 absolute -top-0 -right-1 rounded-full"></div>
				</div>
				<BsPlusCircleFill size={35} />
			</div>
		</div>
	);
};

export default Navbar;
