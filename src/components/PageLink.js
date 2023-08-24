const PageLink = ({ href, text, hideLinks }) => {
  return (
    <li>
      <a
        href={href}
        onClick={() => {
          if (hideLinks) {
            hideLinks();
          }
        }}
      >
        {text}
      </a>
    </li>
  );
};

export default PageLink;
