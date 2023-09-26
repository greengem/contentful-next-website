export default function HomeSection({ children, id = 'default-section' }) {
    return (
        <section id={id} className="pb-10 md:pb-40 pt-10 md:pt-30">
            {children}
        </section>
    );
}
