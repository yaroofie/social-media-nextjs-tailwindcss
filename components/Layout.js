export default function Layout ( { children } )
{
   return (
      <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0">
         {children}
      </div>
   );
}
