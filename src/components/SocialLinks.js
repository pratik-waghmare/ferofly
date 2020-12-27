import "./SocialLinks.css";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "tripadvisor",
      url: "#",
      icon:
        "https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp",
    },
    {
      name: "instagram",
      url: "#",
      icon:
        "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp",
    },
    {
      name: "linkedin",
      url: "#",
      icon:
        "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp",
    },
  ];
  return (
    <div className="socialLinks">
      <ul>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url}>
              <img src={link.icon} alt="hello" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
