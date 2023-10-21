
import { NavLink } from 'react-router-dom'
import '../component/sidebar.css'
import profile from '../assets/profile.png';
import { BiBarChart, BiPieChart, BiWalletAlt, BiLogOutCircle } from 'react-icons/bi'
import Navbar from './Navbar';

const Sidebar = () => {
	return (
		<>
			<nav className="fixed top-0 z-50 w-full bg-white">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start">
							<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100  dark:text-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-400">
								<span className="sr-only">Open sidebar</span>
								<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
								</svg>
							</button>

						</div>

						<div className="lg:hidden block">
							<Navbar />
						</div>

					</div>
				</div>
			</nav>

			<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 lg:pt-10lg: transition-transform -translate-x-full bg-white  sm:translate-x-0" aria-label="Sidebar">
				<div className="h-full px-3 pb-4 overflow-y-auto bg-white">
					<div className='flex gap-2 items-center pl-10'>
						<div className='w-full'>
							<img src={profile} alt='img' className='w-16' />
						</div>
						<div>
							<p className='text-base font-medium'>Kristen Ramos</p>
							<p className='text-xs font-medium'>kristen.ramos@gmail.com</p>
						</div>
					</div>
					<div className='flex flex-col justify-between h-[70vh] items-start pl-12 pt-8 '>
						<div>
							<ul className="space-y-10 mt-[25%] font-medium">

								<li className='flex items-center gap-3 font-medium text-sm'>
									<BiPieChart />
									<NavLink exact to='/' className='nav-link' activeClassName='active'>
										Dashboard
									</NavLink>
								</li>

								<li className='flex items-center gap-3 font-medium text-sm'>
									<BiWalletAlt />
									<NavLink exact to='/holdings' className='nav-link' activeClassName='active'>
										Holdings
									</NavLink>
								</li>

								<li className='flex items-center gap-3 font-medium text-sm'>
									<BiBarChart />
									<NavLink exact to='/performance' className='nav-link' activeClassName='active'>
										Performance
									</NavLink>
								</li>

							</ul>
						</div>

						<div>
							<li className='flex items-center gap-3 font-medium text-sm'>
								<BiLogOutCircle />
								<NavLink exact to='/performance' className='nav-link' activeClassName='active'>
									Logout
								</NavLink>
							</li>
						</div>
					</div>

				</div>
			</aside>
		</>
	);
};

export default Sidebar;
