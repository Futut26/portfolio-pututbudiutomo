import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');  // Required for accessibility

const DetailProject = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find((project) => project.id === projectId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text drop-shadow font-semibold">{project.name}</span>
      </h1>

      <div className="mt-5 flex gap-3 text-slate-500">
        <img
          className="w-[50%] max-h-96 object-contain transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          src={project.thumbnail}
          alt=""
          onClick={() => openModal(project.thumbnail)}
        />

        <div className="grid grid-cols-1 gap-3">
          {project.gallery.map((image, index) => (
            <img
              className="w-auto max-h-96 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              src={image.imageUrl}
              alt=""
              key={index}
              onClick={() => openModal(image.imageUrl)}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-slate-500">{project.description}</p>
      </div>

      {/* create list for feature */}
            <div className="mt-5">
        <h3 className="subhead-text">Features</h3>
        <ul className="mt-5 list-disc list-inside text-slate-500">
            {project.features.map((feature, index) => (
            <li key={index} className="text-black-500/50 font-normal pl-1 text-sm">
              {feature}
            </li>
            ))}
        </ul>
        </div>
        
            
    
      
            


        <div className="mt-5">
            <h3 className="subhead-text">Tech Stack</h3>
            <div className="mt-5 flex gap-3">
                {project.technologies.map((tech, index) => (
                <div key={index} className="rounded-full bg-blue-600 text-white px-3 py-1 text-sm">
                    {tech}
                </div>
                ))}
            </div>
        </div>

        <div className="mt-5">
            <h3 className="subhead-text">Links</h3>
            <div className="mt-5 flex gap-3">
                <Link to={project.link} className="rounded-full bg-black text-white px-3 py-1 text-sm">
                Github
                </Link>
                
            </div>
        </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img src={selectedImage} alt="Full Preview" className="max-w-full max-h-full object-contain" />
          <button onClick={closeModal} className="absolute top-2 right-2 bg-black text-white rounded-full px-2 py-1">Close</button>
        </div>
      </Modal>
    </section>
  );
};

export default DetailProject;
