import React from "react";
import mgcms from "../assets/blue_dress.glb";
import hamzatyellow from "../assets/yellow_dress.glb";
import dgc from "../assets/surfing_swimsuit_low-poly.glb";
import dosi from "../assets/open_puffer_jacket.glb";
import geig from "../assets/dior_bolso_saddle_con_bandolera_rojo.glb";
import image1 from '../assets/Screenshot 2024-07-11 131845.png';
import image2 from '../assets/Screenshot 2024-07-11 131901.png';
import image3 from '../assets/Screenshot 2024-07-11 132048.png';

const Arlearning = () => {
    const scenarios = [
        {
            id: 1,
            title: 'High Return Rates Due to Fit Issues',
            image: image1,
            description: 'Current training lacks realistic, immersive scenarios, limiting hands-on experience and preparedness for real-world situations.',
        },
        {
            id: 2,
            title: 'Low User Engagement and Habitual Visits',
            image: image2,
            description: 'Netapp Hackathon struggles to maintain high user engagement and frequent visits, especially among Gen Z. In a competitive market, it is crucial to enhance user engagement and provide a seamless shopping experience.',
        },
        {
            id: 3,
            title: 'Seamless and Integrated Shopping Experience',
            image: image3,
            description: 'Effortless shopping, streamlined journey, boosted conversions, precision fit, and confidence in choices are key to a successful shopping experience.',
        },
    ];

    return (
        <div className="bg-gray-50">
            <div className="bg-pink-100 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-pink-600"> Virtual Equipments </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-[0px] sm:ml-[15%]">
                    {scenarios.map((scenario) => (
                        <div key={scenario.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={scenario.image} alt={scenario.title} className="w-full h-50  mb-4 rounded-md" />
                            <h2 className="text-xl font-semibold mb-2">{scenario.title}</h2>
                            <p className="text-gray-600">{scenario.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center py-8">
                <h1 className="mt-5 text-5xl font-bold text-pink-600">VIRTUAL</h1>
            </div>

            <div className="flex flex-wrap justify-center px-8 ml-[0px] sm:ml-[10%]">
                {/* Section 1 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">GE Healthcare Revolution CT </h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                    GE Healthcare's Revolution CT is a state-of-the-art computed tomography scanner designed for rapid, high-resolution imaging. It features advanced technologies like the Gemstone Clarity detector, which improves image quality while reducing noise. 
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Patient Preparation: Position the patient on the CT table and ensure they are comfortable. Use immobilization devices if necessary to minimize movement.</li>
                        <li>Initiate Scan: Start the scan using the intuitive user interface. The system's AI-based workflow simplifies this step.
                        Monitor: Keep an eye on the scan progress and patient status.</li>
                        <li>Report Generation: Generate and share diagnostic reports with the healthcare team for further action.</li>
                        <li>Price: ₹9,00,00,000</li>
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={mgcms}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                            poster="logo.png"
                            alt="mgcms"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">Siemens MAGNETOM Lumina (MRI Machine)</h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                        
                    </p>Siemens' MAGNETOM Lumina is a state-of-the-art 3T MRI system designed for high productivity, reproducibility, and patient satisfaction. It features advanced technologies like BioMatrix and Deep Resolve, which enhance image quality and reduce scan times.
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Patient Preparation
                        Position the patient on the MRI table and ensure they are comfortable. Use the BioMatrix patient personalization technology to adapt to the patient's biological variability.</li>
                        <li>Initiate Scan
                        Start the scan using the intuitive syngo MR XA software platform. The system's AI-based workflow simplifies this step. Monitor the scan progress and patient status using the syngo Virtual Cockpit.</li>
                        <li>Price: ₹12,00,00,000</li>
                        
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={hamzatyellow}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                            poster="logo.png"
                            alt="hamzatyellow"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">Fresenius 5008S (Dialysis Machine)</h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                    Fresenius' 5008S Dialysis Machine is designed for effective and precise hemodialysis. It features advanced technologies like AutoSub plus for maximizing substitution volumes and Venous Access Monitoring (VAM) for enhanced patient safety. The machine offers multiple therapy modalities, including HighVolumeHDF, and supports both single-needle and double-needle methods. Its user-friendly interface and ergonomic design make it easy to operate, ensuring high treatment efficiency and patient comfort.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Set Up: Connect the machine to the water and power supply. Ensure the machine is in perfect working condition.</li>
                        <li>Start: Begin the dialysis session using the AutoSub plus feature, which automatically adjusts the substitution volumes for optimal HighVolumeHDF®.
                        Monitor: Keep an eye on the treatment parameters and patient status using the simplified user interface and remote control.</li>
                        
                        <li>Price: ₹15,00,000</li>
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={dgc}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            alt="Digital Geiger Counter"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>

                {/* Section 4 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">Varian TrueBeam (Radiation Therapy Machine)</h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                    Varian's TrueBeam is a radiotherapy system designed for precise and efficient cancer treatment. It offers advanced technologies like IMRT, SBRT, and VMAT to deliver high-precision radiation therapy. The system features enhanced soft-tissue visualization and motion management, ensuring accurate targeting of tumors while minimizing exposure to healthy tissues.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Immobilization: Use immobilization devices to keep the patient still during treatment.</li>
                        <li>Initiate: Start the treatment session using the user-friendly interface.</li>
                        <li>
                        Monitor: Continuously monitor the patient and machine parameters during the session to ensure safety and accuracy.</li>
                        <li> ₹25,00,00,000</li>
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={geig}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                            poster="logo.png"
                            alt="geig"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Arlearning;
