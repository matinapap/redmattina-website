export default function Footer(){
    return(
        <footer className="bg-pink-200 text-pink-800 p-4 text-center text-sm">
            © {new Date().getFullYear()} RedMattina. All rights reserved.
        </footer>
    );
}