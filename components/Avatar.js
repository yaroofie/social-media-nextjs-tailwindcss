export default function Avatar({ url,size }) {
  let width = "w-12";
  if (size === "lg") {
    width = "w-24 md:w-36";
  }
  return (
    <div className={`${width} relative`}>
      <div className="rounded-full overflow-hidden">
        <img src={url} alt="user avatar" className="w-full" />
      </div>
    </div>
  );
}