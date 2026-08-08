"use client";

export default function DeleteButton({ label = "Delete" }: { label?: string }) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!confirm("Are you sure? This can't be undone.")) e.preventDefault();
      }}
      className="text-xs uppercase tracking-widest font-semibold text-red-600 hover:underline"
    >
      {label}
    </button>
  );
}
