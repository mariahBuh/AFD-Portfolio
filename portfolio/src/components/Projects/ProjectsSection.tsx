type Props = {
  title: string;
  tech: string;
};

export default function ProjectCard({ title, tech }: Props) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{tech}</p>
      <button>View</button>
    </article>
  );
}
