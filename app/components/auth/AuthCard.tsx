

export default function AuthCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md rounded-xl bg-neutral-800 p-6 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold text-white">{title}</h1>
      {children}
    </div>
  );
}
