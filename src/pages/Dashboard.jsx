import { BsFillArrowRightSquareFill, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'
import './srollbar.css'
import { BiLogoApple } from 'react-icons/bi'
import { LiaDollarSignSolid } from 'react-icons/lia'
import line from '../assets/line.svg'
import pie from '../assets/pie.png'
import graph from '../assets/graph.png'
import icon1 from '../assets/icon1.png'
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

const Dashboard = () => {
	return (
		<>
			<Sidebar />

			<div className="p-4 sm:ml-64">
				<div className="px-4 rounded-lg  lg:mt-10 mt-14">
					<div className="bg-[#F0F1F5] rounded-bl-[90px] rounded-tr-[50px]  lg:h-[40vh] ">
						<div className="container mx-auto lg:px-5 lg:pr-10 py-8">
							<div className="hidden lg:block mb-7">
								<Navbar />
							</div>
							<div className="lg:grid grid-cols-3 space-y-4 lg:space-y-0 gap-4 mb-4">
								<div className="col-span-1 shadow-md rounded-[20px] py-8 px-5 bg-white relative">
									<p className="text-2xl font-medium">Upgrade your Account</p>
									<div className="absolute top-[25%] left-[-20%]">
										<img src={icon1} alt="" />
									</div>
									<div className="text-end flex flex-col items-end">
										<p className="w-2/3 text-start pl-4 pt-3 text-[#D0D1DA]">Access many other features and helpful insights</p>
										<div className="flex justify-end mt-16">
											<BsFillArrowRightSquareFill size={50} />
										</div>
									</div>
								</div>
								<div className="col-span-2 shadow-md rounded-[20px] py-8 px-5 bg-white">
									<div>
										<img src={graph} alt="" className="w-full" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className=" mt-[20%] max-w-screen-lg lg:pl-16 lg:pe-10 ">
						<div className='flex justify-between items-center pb-5'>
							<p className="font-medium">Portfolio History</p>
							<p className=" lg:block hidden font-medium border-dotted border-b-2 border-black">Per Industry</p>

						</div>
						<div className="lg:grid grid-cols-5 lg:space-y-0 space-y-5 gap-4">
							<div className="border rounded-[20px] flex flex-col justify-between items-start py-8 px-4 h-[300px]">
								<div className="pl-2" >
									<p className="font-semibold text-xl text-gray-600 pb-3">NOV 19</p>
									<div className="border-b-4 border-gray-600 w-[30px]"></div>

								</div>
								<div>
									<p className="font-medium text-xs pl-2">Portfolio Value</p>
									<p className="flex gap-2 items-center font-semibold text-2xl"><LiaDollarSignSolid size={22} />9 864.34</p>
									<p className="flex gap-2 items-center font-semibold text-[#48C3C1] text-sm"><BsArrowUpShort size={22} />234.23(30.34%)</p>

								</div>

							</div>
							<div className="border rounded-[20px] flex flex-col justify-between items-start bg-[#F6F7F9] py-8 px-3  h-[300px]">
								<div className="pl-2" >
									<p className="font-semibold text-xl text-gray-600 pb-3">OCT 19</p>
									<div className="border-b-4 border-gray-600 w-[30px]"></div>

								</div>
								<div>
									<img src={line} alt="" className=" transform scale-x-[-1] w-full " />
								</div>
								<div>
									<p className="font-medium text-xs pl-2">Portfolio Value</p>
									<p className="flex gap-2 items-center font-semibold text-2xl"><LiaDollarSignSolid size={22} />7 845.32</p>
									<p className="flex gap-2 items-center font-semibold text-[#48C3C1] text-sm"><BsArrowUpShort size={22} />143.56(15.43%)</p>

								</div>
							</div>
							<div className="border rounded-[20px] flex flex-col justify-between items-start py-8 px-3  h-[300px]">
								<div className="pl-2" >
									<p className="font-semibold text-xl text-gray-600 pb-3 ">SEP 19</p>
									<div className="border-b-4 border-gray-600 w-[30px]"></div>

								</div>
								<div>
									<p className="font-medium text-xs pl-2">Portfolio Value</p>
									<p className="flex gap-2 items-center font-semibold text-2xl"><LiaDollarSignSolid size={22} />7 453.45</p>
									<p className="flex gap-2 items-center font-semibold text-red-600 text-sm"><BsArrowDownShort size={22} />-134.23(-8.34%)</p>

								</div>
							</div>
							<div className=" col-span-2 border bg-[#0120F7]  rounded-[20px] flex flex-col justify-between items-center py-2  h-[300px]">
								<div>
									<img src={pie} alt="" className="w-full" />
								</div>
							</div>
						</div>


						<div className="pt-5 w-full overflow-x-scroll scrollbar" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
							<table className="min-w-full">
								<thead>
									<tr>
										<th className="px-4 text-left text-[10px] font-medium text-gray-400 uppercase tracking-wider">Symbol</th>
										<th className="px-4 text-right text-[10px] font-medium text-gray-400  uppercase tracking-wider">Price</th>
										<th className="px-4 text-right text-[10px] font-medium text-gray-400  uppercase tracking-wider">%Return</th>
										<th className="px-4 text-right text-[10px] font-medium text-gray-400 uppercase tracking-wider">Total Net Cost</th>
										<th className="px-4 text-right text-[10px] font-medium text-gray-400  uppercase tracking-wider">Market Value</th>
										<th className="px-4 text-right text-[10px] font-medium text-gray-400  uppercase tracking-wider">Total Gain</th>
										<th className="px-4 text-right text-[10px] font-medium text-gray-400  uppercase tracking-wider">Daily Gain</th>
										<th className="px-4 text-right text-[10px] font-medium text-gray-400  uppercase tracking-wider">%Portfolio</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="px-6 flex py-4 items-center gap-2 text-[#1B1C34] font-semibold border-l-4 border-[#88D2F3] uppercase whitespace-nowrap">
											<span className="p-2 rounded-full bg-[#F0F1F5]"><BiLogoApple /> </span> AAPL</td>
										<td className="px-6 py-4 whitespace-nowrap font-medium text-[#1B1C34] ">= $ 234.00</td>
										<td className="px-6 py-4 whitespace-nowrap font-medium text-[#48C3C1]">$ 45.43</td>
										<td className="px-6 py-4 whitespace-nowrap font-medium text-[#1B1C34]">$ 1 234.00</td>
										<td className="px-6 py-4 whitespace-nowrap font-medium text-[#1B1C34]">$ 1 345.87</td>
										<td className="px-6 py-4 whitespace-nowrap font-medium text-[#48C3C1]">$ 456.34</td>
										<td className="px-6 py-4 whitespace-nowrap font-medium text-red-400">-$ 3.45</td>
										<td className="px-6 py-4 whitespace-nowrap font-medium text-[#1B1C34]">13,45%</td>
									</tr>



								</tbody>
							</table>

						</div>


					</div>
				</div>
			</div>

		</>

	)
}

export default Dashboard