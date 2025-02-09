"use client";

interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <li>
      {icon}
      {text}
    </li>
  );
};

export default SidebarItem;
