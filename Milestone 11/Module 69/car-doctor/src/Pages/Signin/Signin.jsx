import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className='pt-40 mb-36'>
            <div className='grid grid-cols-2 gap-40 w-3/4 mx-auto'>
                <div className='w-full mx-auto mt-14'>
                    <img className='w-full' src="/login.svg" alt="" />
                </div>
                <div className='mx-auto w-full bg-[#171818] rounded-lg p-8 mt-20 mb-4'>
                    <h2 className='text-4xl text-center text-white font-semibold mb-3'>Login</h2>
                    <form>
                        <div className=''>
                            <div className='pb-2'>
                                <label className='text-white' htmlFor="email">Email</label><br />
                                <input className=' bg-white text-black rounded p-2 border-slate-300 border w-full' type="email" name="email" id="" />
                            </div>
                            <div className='pb-2'>
                                <label className='text-white'>Password</label><br />
                                <div className='flex'>
                                    <input className=' bg-white text-black rounded-s p-2 border-slate-300 border w-full' name="password" id="" />
                                    <button className='bg-white text-black px-3 rounded-r'></button>
                                </div>
                            </div>
                        </div>
                        <input className='w-full mt-5 bg-[#2cae74] rounded text-black font-semibold p-2 mb-3 cursor-pointer' type="submit" value='Login' /><br />
                    </form>
                    <p className='text-center text-white'>--------- or ---------</p>
                    <div className='flex gap-2 mb-3'>
                        <button  className='w-full bg-[#2cae74] rounded text-black font-semibold p-2 mt-3'>Google</button>
                    </div>
                    <div className='text-center'>
                        <small><span className='text-white'>New to Turbo Toy Car?</span> <Link to='/signup' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                    </div>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'></p>
        </div>
    );
};

export default Signin;