import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(/assets/Images/SIT.jpg)` }}>

      <Container fluid>
        <Row className="py-4">
          {/* About Section */}
          <Col xs={12} sm={6} md={4} className="mb-3">
            <h5 className="footer-title">SymbiAnatomy</h5>
            <p>
              An educational platform developed collaboratively by Symbiosis Medical College for Women and Symbiosis Institute of Technology, Pune. Designed to simplify the study of cells and histology for medical students.
            </p>
          </Col>
          
          {/* Quick Links Section */}
          <Col xs={12} sm={6} md={2} className="mb-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home" className="footer-link">Home</Link></li>
              <li><Link to="/Epithelium" className="footer-link">Epithelium</Link></li>
              <li><Link to="/Thyroid" className="footer-link">Thyroid</Link></li>
              <li><Link to="/Cartilage" className="footer-link">Cartilage</Link></li>
              <li><Link to="/ConnectiveTissue" className="footer-link">Connective Tissue</Link></li>
              <li><Link to="/Cartilage" className="footer-link">Cartilage</Link></li>
              <li><Link to="/Bone" className="footer-link">Bone</Link></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5 className="footer-title">Contact Us</h5>
            <p>
              Symbiosis Institute of Technology, Pune <br />
              Email: <a href="mailto:adminofficer@sitpune.edu.in" className="footer-link">adminofficer@sitpune.edu.in</a>
            </p>
            <p>
              Symbiosis Medical College for Women, Pune <br />
              Email: <a href="mailto:contact@smcw.edu.in" className="footer-link">contact@smcw.edu.in</a>
            </p>
          </Col>

          {/* Social Media Section */}
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5 className="footer-title">Follow Us</h5>
            <div className="d-flex justify-content-start">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="text-center">
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Symbiosis Institute of Technology & Symbiosis Medical College for Women, Pune. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
