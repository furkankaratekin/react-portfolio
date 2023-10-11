const SkillsCard = ({icon, title, text}) => {
  return (
    <article className="mx-auto max-w-9xl px-16">
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
}

export default SkillsCard