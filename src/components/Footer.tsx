export default function Footer(){
    return(
        <footer style={{ backgroundColor: '#f5adbcff' }} className="bg-200 text-pink-800 p-4 text-center text-sm">
            © {new Date().getFullYear()} RedMattina. All rights reserved.
        </footer>
    );
}