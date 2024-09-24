const Section = ({ children, custom_style }) => {

  const style = `px-8 py-20 flex flex-col justify-center items-center ${custom_style}`

  return (
    <section className={style}>
      { children }
    </section>
  );
}

export default Section;