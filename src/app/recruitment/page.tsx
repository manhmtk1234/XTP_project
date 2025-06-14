'use client';
import React, { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import style from "@/app/style/styles.module.css";
import Navigation from '@/components/navigation';
import Footer from "@/components/Footer";
import RecruitmentBanner from "@/components/RecruitmentBanner"
import HexagonImage from "@/components/HexagonImage";
import Link from "next/link";

export default function recruitment() {
    const [showForm, setShowForm] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    const [formData, setFormData] = useState({
        position: '',
        name: '',
        university: '',
        specialized: '',
        studentyear: '',
        skill: '',
        project: '',
        email: '',
        phone: '',
        message: '',
    });

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleClick = () => {
        setShowForm(true);
        document.body.style.overflow = "hidden"; // Chặn cuộn trang khi hiển thị form
    };

    const handleClickOff = () => {
        setShowForm(false);
        document.body.style.overflow = "auto"; // Khôi phục cuộn trang khi đóng form
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const RoundImage = ({ src, alt, className = "" }: { src: string; alt?: string; className?: string }) => (
    <img src={src} alt={alt} className={`rounded-full border-4 border-[#1553ad] object-cover ${className}`} />
    );

    const SquareImage = ({ src, alt, className = "" }: { src: string; alt?: string; className?: string }) => (
        <img src={src} alt={alt} className={`rounded-lg object-cover ${className}`} />
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) {
            console.error("Form reference is null");
            return;
        }

        try {
            const result = await emailjs.sendForm(
                'service_465',  // Service ID 
                'template_1210',  // Template 
                formRef.current, //
                'xK1xvHBDf9fjhLR_D',    // Public Key
            );

            alert("Hồ sơ đã gửi thành công!");
            setFormData({ position: '', name: '', university: '', specialized: '', skill: '', project: '', studentyear: '', email: '', phone: '', message: '' });
            setShowForm(false);
        } catch (error) {
            alert("Có lỗi xảy ra, vui lòng thử lại!");
            console.error("Lỗi gửi email:", error);
        }
    };

    const reacuitments = [
        {
            id: 1,
            location: ' Intern Front End',
            wage: 'Thỏa thuận',
            address: 'Hà Nội',
            time: ' Hạn hồ sơ 30/03/2025',
        },
        {
            id: 2,
            location: 'Intern Back End',
            wage: 'Thỏa thuận',
            address: 'Hà Nội',
            time: ' Hạn hồ sơ 30/03/2025',
        },
        {
            id: 3,
            location: 'Intern Ai (Python)',
            wage: 'Thỏa thuận',
            address: 'Hà Nội',
            time: ' Hạn hồ sơ 30/03/2025',
        }
    ];
    return (
        <main className={`${style.mainIndex} w-[70%] bg-white ml-[15%] mr-[15%] relative top-[20vh] flex flex-col shadow-md`}>
            <div className='w-full h-10 bg-[#005db2] flex items-center'>
                <div className='flex justify-end h-full max-w-[1170px] w-full m-auto'>
                    <ul className='p-0 m-0 h-full list-none flex items-center'>
                        <li className='cursor-pointer h-full items-center py-2 relative mr-4'>
                        </li>
                    </ul>
                </div>
            </div>
            <Navigation />
            <RecruitmentBanner />

            {/* --- BẮT ĐẦU PHẦN GIỚI THIỆU HITECH --- */}
            <section className="w-full flex flex-col items-center mt-8">
                <h1 className="text-[64px] font-bold text-[#1553ad] text-center leading-tight bg-[#b3d2f1] px-8 py-2 rounded-md mb-6 w-fit mx-auto">
                    Hitech - Kết Nối Tri Thức & Công Nghệ
                </h1>
                <hr className="w-[96%] h-[6px] bg-gray-100 border-0 my-6" />
                <div className="flex flex-row w-full justify-center items-start gap-8 mt-4">
                    <img
                        src="/hitechlogo.png"
                        alt="Hitech Vietnam"
                        className="w-[350px] h-auto object-contain"
                        style={{ minWidth: 220 }}
                    />
                    <div className="max-w-[900px] text-[28px] leading-[1.4] text-black text-justify">
                        Hitech không chỉ là một tổ chức công nghệ mà còn là cầu nối tri thức, nơi chuyển giao công nghệ tiên tiến và nuôi dưỡng thế hệ nhân tài tương lai. Chúng tôi cam kết mang đến những giải pháp đổi mới, giúp cá nhân và doanh nghiệp nắm bắt cơ hội trong kỷ nguyên số, tối ưu hiệu suất làm việc và phát triển bền vững. Với sứ mệnh thúc đẩy sáng tạo và kết nối công nghệ với thực tiễn, Hitech luôn đồng hành cùng doanh nghiệp, tổ chức và cá nhân trên hành trình ứng dụng công nghệ vào cuộc sống và công việc, tạo ra những giá trị thiết thực và bền vững.
                    </div>
                </div>
            </section>
            {/* --- KẾT THÚC PHẦN GIỚI THIỆU HITECH --- */}

            <section
                className="flex flex-wrap justify-center items-center gap-y-0"
                style={{ marginTop: 100 }}
            >
                <HexagonImage src="/home-slider-images06.jpg" alt="Sự kiện 1" />
                <HexagonImage src="/home-slider-images10.jpg" alt="Sự kiện 2" className="!-mt-52" />
                <HexagonImage src="/structure.jpg" alt="Sự kiện 3" />
                <HexagonImage src="/home-slider-images08.jpg" alt="Sự kiện 4" className="!-mt-52" />
                <HexagonImage src="/home-slider-images02.jpg" alt="Sự kiện 5" />
            </section>

            {/* --- MỤC TIÊU CỦA CHÚNG TÔI --- */}
            <section className="w-full flex flex-col items-center mt-16 mb-8">
                <div className="flex items-center justify-center mb-8">
                    <h2 className="text-[64px] font-bold text-[#1553ad] text-center leading-tight uppercase mr-4">
                        Mục tiêu của chúng tôi
                    </h2>
                    <img src="/chart.png" alt="Chart" className="w-20 h-20 object-contain" />
                </div>
                <div className="w-[98%] bg-[#f7f7f7] rounded-lg flex flex-row justify-center items-stretch gap-8 py-10 px-4">
                    {/* Chuyển giao công nghệ */}
                    <div className="flex-1 flex flex-col items-center text-center px-4">
                        <img src="/icon-technology.png" alt="" className="w-16 h-16 mb-2" />
                        <h3 className="text-2xl font-semibold mb-2">Chuyển giao công nghệ</h3>
                        <p className="text-lg text-gray-800">
                            Đưa những giải pháp hiện đại vào thực tiễn, giúp doanh nghiệp và cá nhân ứng dụng hiệu quả. Công nghệ vào cuộc sống.
                        </p>
                    </div>
                    {/* Phát triển nhân tài */}
                    <div className="flex-1 flex flex-col items-center text-center px-4">
                        <img src="/icon-talent.png" alt="" className="w-16 h-16 mb-2" />
                        <h3 className="text-2xl font-semibold mb-2">Phát triển nhân tài</h3>
                        <p className="text-lg text-gray-800">
                            Đào tạo và bồi dưỡng nguồn nhân lực chất lượng cao, trang bị kiến thức và kỹ năng cần thiết để dẫn đầu trong thời đại số.
                        </p>
                    </div>
                    {/* Thúc đẩy đổi mới sáng tạo */}
                    <div className="flex-1 flex flex-col items-center text-center px-4">
                        <img src="/icon-innovation.png" alt="" className="w-16 h-16 mb-2" />
                        <h3 className="text-2xl font-semibold mb-2">Thúc đẩy đổi mới sáng tạo</h3>
                        <p className="text-lg text-gray-800">
                            Xây dựng môi trường khuyến khích tư duy sáng tạo, đổi mới trong lĩnh vực công nghệ.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center mt-16 mb-8">
                <h2 className="text-[40px] md:text-[48px] font-bold text-[#1553ad] text-center mb-2">
                    Hình ảnh của sinh viên đang thực hành dự án
                </h2>
                <div className="flex flex-row justify-center items-end gap-12 mt-4 mb-2">
                    <div className="flex flex-col items-center">
                        <RoundImage
                            src="/student-project-4.jpg"
                            alt="Sinh viên thực hành 1"
                            className="w-[240px] h-[240px] border-[6px] border-[#1553ad] shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col items-center relative">
                        <RoundImage
                            src="/student-project-5.jpg"
                            alt="Sinh viên thực hành 2"
                            className="w-[260px] h-[260px] border-[8px] border-[#1553ad] shadow-lg"
                        />
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[80px] text-[#1553ad] font-bold select-none leading-none">↓</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <RoundImage
                            src="/student-project-6.jpg"
                            alt="Sinh viên thực hành 3"
                            className="w-[240px] h-[240px] border-[6px] border-[#1553ad] shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center mt-16 mb-8">
                <h2 className="text-[40px] md:text-[48px] font-bold text-[#1553ad] text-center mb-6">
                    Hình ảnh của sinh viên đang thực hành dự án
                </h2>
                <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto gap-8">
                    {/* Ảnh bên trái */}
                    <div className="flex flex-col gap-6 flex-shrink-0 items-center md:items-start w-full md:w-[340px]">
                        <SquareImage src="/student-project-4.jpg" alt="Sinh viên thực hành 1" className="w-[260px] h-[160px] rounded-xl object-cover shadow" />
                        <SquareImage src="/student-project-5.jpg" alt="Sinh viên thực hành 2" className="w-[260px] h-[160px] rounded-xl object-cover shadow" />
                        <SquareImage src="/student-project-6.jpg" alt="Sinh viên thực hành 3" className="w-[260px] h-[160px] rounded-xl object-cover shadow" />
                    </div>
                    {/* Thông tin bên phải */}
                    <div className="flex-1 flex flex-col justify-start">
                        <div className="flex items-center mb-2">
                            <svg width="36" height="36" fill="#1553ad" className="mr-2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18.75A8.75 8.75 0 1 1 20.75 12 8.76 8.76 0 0 1 12 20.75ZM12 7.25a.75.75 0 0 1 .75.75v3.19l2.72 1.57a.75.75 0 1 1-.75 1.3l-3-1.75A.75.75 0 0 1 11.25 12V8A.75.75 0 0 1 12 7.25Z"/></svg>
                            <span className="text-[#1553ad] font-bold text-[22px]">
                                Sinh viên thực hành dự án công nghệ thông tin
                            </span>
                        </div>
                        <p className="text-[18px] text-black mb-4">
                            Trong quá trình học tập, sinh viên ngành Công nghệ Thông tin được trực tiếp tham gia vào các dự án thực tế nhằm rèn luyện kỹ năng chuyên môn, phát triển tư duy sáng tạo và giải quyết vấn đề.
                        </p>
                        <h3 className="text-[#1553ad] font-bold text-[20px] mb-2 mt-2">
                            Thông qua các dự án này, sinh viên có cơ hội:
                        </h3>
                        <ul className="list-disc pl-6 text-[17px] text-black mb-4">
                            <li>Áp dụng kiến thức đã học như lập trình, cơ sở dữ liệu, trí tuệ nhân tạo, phát triển web/app… vào bài toán thực tế.</li>
                            <li>Làm việc theo nhóm như một mô hình doanh nghiệp thu nhỏ: phân chia vai trò, quản lý tiến độ và báo cáo kết quả.</li>
                            <li>Tiếp cận công nghệ mới như điện toán đám mây, IoT, blockchain, DevOps…</li>
                            <li>Tương tác với doanh nghiệp, nhận phản hồi từ chuyên gia và khách hàng thật.</li>
                        </ul>
                        <h3 className="text-[#1553ad] font-bold text-[20px] mb-2 mt-2">
                            Các dự án có thể bao gồm:
                        </h3>
                        <ul className="list-disc pl-6 text-[17px] text-black mb-4">
                            <li>Xây dựng ứng dụng quản lý học tập.</li>
                            <li>Thiết kế hệ thống đặt lịch thông minh cho doanh nghiệp.</li>
                            <li>Phát triển chatbot hỗ trợ tư vấn khách hàng.</li>
                            <li>Ứng dụng AI trong xử lý ảnh hoặc phân tích dữ liệu.</li>
                        </ul>
                        <p className="text-[17px] text-black">
                            Việc thực hành dự án không chỉ giúp sinh viên tự tin hơn khi bước vào môi trường làm việc thực tế mà còn là bước đệm để các bạn trở thành những kỹ sư công nghệ năng động, sáng tạo và thích nghi tốt với xu hướng phát triển của thời đại số.
                        </p>
                    </div>
                </div>
            </section>
            <section className={`py-[3.125rem]`}>
                <div className='w-full px-4 mx-auto'>
                    <div className='flex items-center justify-center flex-col flex-grow'>
                        <h2 className='text-black text-[32px] font-bold text-center uppercase'>
                            CƠ HỘI NGHỀ NGHIỆP
                        </h2>
                        <span className='bg-[#db0d0d] w-20 h-1 mt-2 mb-6'></span>
                    </div>
                </div>
                <div className={`${style.container} w-full px-7 py-4 mx-auto`}>
                    <div className='justify-center flex flex-wrap'>
                        {reacuitments.map(recruitment => (
                            <div key={recruitment.id} className='p-6 mb-4 cursor-default w-full mx-auto' style={{ borderBottom: '1px solid #e0e0e0' }}>
                                <div className='flex flex-wrap'>
                                    <div className='pl-0 flex-col flex flex-grow relative pr-4 w-1/2'>
                                        <div>
                                            <Link href={'#'} className='font-[700] no-underline '>
                                                {recruitment.location}
                                            </Link>
                                        </div>
                                        <div className='flex flex-col pt-2'>
                                            <div className='pr-2 pt-3 flex flex-col '>
                                                <div className='flex flex-row'>
                                                    <span className='inline-block w-6 h-6'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                                        </svg>
                                                    </span>
                                                    <span className='text-red-500 ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                                        {recruitment.wage}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='pr-2 pt-3 flex flex-col '>
                                                <div className='flex flex-row'>
                                                    <span className='inline-block w-6 h-6'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                        </svg>
                                                    </span>
                                                    <span className='text-black ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                                        {recruitment.address}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='pr-2 pt-3 flex flex-col '>
                                                <div className='flex flex-row'>
                                                    <span className='inline-block w-6 h-6'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                    </span>
                                                    <span className='text-black ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                                        {recruitment.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='justify-center flex-col flex '>
                                        <button
                                            className='w-full block no-underline p-3 my-auto text-white text-center whitespace-nowrap' style={{ background: '#2690eb', maxWidth: '200px', minWidth: '100px', borderRadius: '24px' }}
                                            onClick={handleClick}
                                        >
                                            Ứng tuyển
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div id='bgForm' className={`${showForm ? "!block" : "hidden"} fixed top-[0] left-0 w-full h-full bg-[#000000] opacity-50 z-[9999]`}></div>
            {showForm && (
                <section
                    className="fixed h-[98%] max-h-[80%] min-h-[200px] p-6 left-1/2 bg-white flex z-[9999] w-[600px] top-[21%] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,.16)] border-t-4 border-solid border-[#2680eb] overflow-y-hidden flex-col max-726:w-[90%] max-726:!h-[75%] max-726:max-h-full max-726:mx-auto max-500:top-[15%]"
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <div className='absolute w-[calc(100%-48px)] justify-between flex'>
                        <div className='text-base font-bold absolute'>Nộp Hồ Sơ</div>
                        <button className="absolute top-0 right-2" onClick={handleClickOff}>✖</button>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-8 overflow-y-auto overflow-x-hidden">
                        <div className="mt-8 overflow-y-auto overflow-x-hidden">
                            <div className='w-[98%] h-auto'>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Chọn vị trí ứng tuyển</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <select
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-10 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        >
                                            <option className='opacity-50' value=""></option>
                                            <option value="TTS Frontend">TTS Frontend</option>
                                            <option value="TTS Backend">TTS Backend</option>
                                            <option value="TTS Python">TTS Python</option>
                                            <option value="TTS Fullstack">TTS Fullstack</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Họ và tên</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            className="px-4 h-10 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Trường đại học</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            type="text"
                                            name="university"
                                            value={formData.university}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-10 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Chuyên nghành</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            type="text"
                                            name="specialized"
                                            value={formData.specialized}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-10 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Sinh viên năm học</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <select
                                            name="studentyear"
                                            value={formData.studentyear}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-10 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        >
                                            <option className='opacity-50' value=""></option>
                                            <option value="TTS Frontend">Năm 3</option>
                                            <option value="TTS Backend">Năm 4</option>
                                            <option value="TTS Fullstack">Năm cuối</option>
                                            <option value="TTS Fullstack">Đã ra trường</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Kỹ năng</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <textarea
                                            name="skill"
                                            value={formData.skill}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-12 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Project</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <textarea
                                            name="project"
                                            placeholder=""
                                            value={formData.project}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-12 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Email</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-10 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className='w-full mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>Số điện thoại</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-10 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className='w-ful mb-4'>
                                    <div className='flex'>
                                        <label className='mb-2'>message</label>
                                        <span className='text-red-600 ml-1'>*</span>
                                    </div>
                                    <div className='w-full'>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="px-4 h-12 border border-solid border-gray-300 rounded-[4px] outline-none w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="flex justify-center items-center w-full bg-blue-500 text-white p-2 hover:bg-blue-600 transition-all rounded cursor-pointer mt-4 leading-10 h-10"
                        >
                            Gửi hồ sơ
                        </button>
                    </form>
                </section>
            )}
            <Footer />
        </main >
    )
}
