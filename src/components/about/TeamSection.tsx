import { teamData } from "@/data/aboutData";
import { Linkedin } from "lucide-react";

export const TeamSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="custom-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals committed to your financial success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar Area */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-500">
                  {member.avatar}
                </div>
                
                {/* LinkedIn overlay */}
                <a
                  href={member.linkedin}
                  className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-10 w-10 text-white" />
                </a>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
