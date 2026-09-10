import styles from "@/styles/marquee.module.css";

interface MarqueeProps {
  text: string
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <section className="my-40">
      {[0, 0, 0].map((_, rowIdx) => {
        return (
          <div
            key={rowIdx}
            className={`${styles.marquee} bg-foreground py-5`}>
            {[0, 0].map((_, idx) => (
              <div
                key={idx}
                className={`bg-foreground text-background text-7xl xsm:text-8xl md:text-9xl uppercase font-primary ${
                  styles.marquee__content
                } ${
                  rowIdx % 2 === 0
                    ? styles.marquee__reverse
                    : styles.marquee__normal
                }`}
                aria-hidden={idx === 1}>
                {Array(50)
                  .fill(0)
                  .map((_, idx) => {
                    return (
                      <p
                        key={idx}
                        className="flex-shrink-0 ">
                        {text}
                      </p>
                    );
                  })}
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default Marquee;
