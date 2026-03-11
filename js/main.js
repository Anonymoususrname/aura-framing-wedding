/**
 * main.js
 * Injects HTML content for all 6 pages into
 * their respective .page containers.
 *
 * In a real project each page's HTML would be a
 * separate fetch() or import. Here all content
 * is defined as template literals for
 * single-file portability.
 */

/* ── Shared footer markup ──────────────────────
   Reused across all pages so changes are made
   in one place only.
─────────────────────────────────────────────── */
function footerHTML(tagline = 'Crafting extraordinary weddings and celebrations for those who believe love deserves nothing less than perfection.') {
  return /* html */`
  <footer>
    <div class="footer-top">
      <div>
        <div class="footer-brand">Eternelle</div>
        <p class="footer-tagline">${tagline}</p>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <a href="#" data-page="home">Home</a>
        <a href="#" data-page="about">About</a>
        <a href="#" data-page="services">Services</a>
        <a href="#" data-page="careers">Careers</a>
        <a href="#" data-page="booking">Book Now</a>
        <a href="#" data-page="contact">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:hello@eternelle.co">hello@eternelle.co</a>
        <a href="tel:+919876543210">+91 98765 43210</a>
        <a href="#">123 Garden Lane, Thrissur</a>
      </div>
      <div class="footer-col">
        <h4>Follow</h4>
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">Facebook</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Eternelle Events. All rights reserved.</p>
      <div class="social-links">
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">Facebook</a>
      </div>
    </div>
  </footer>`;
}

/* ════════════════════════════════════════════════
   PAGE 1 — HOME
════════════════════════════════════════════════ */
document.getElementById('page-home').innerHTML = /* html */`

  <!-- Hero ────────────────────────────────── -->
  <section class="hero">
    <div class="hero-bg" id="heroBg"></div>
    <div class="hero-content">
      <span class="hero-tag">Luxury Wedding &amp; Event Planning</span>
      <h1 class="hero-title">Where Love Becomes<br><em>Legend</em></h1>
      <p class="hero-subtitle">Crafting extraordinary moments that last a lifetime — every detail, every emotion, perfectly woven.</p>
      <a href="#" class="hero-cta" data-page="booking"><span>Begin Your Journey</span></a>
    </div>
    <div class="hero-scroll">
      <div class="hero-scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>

  <!-- Marquee ticker ──────────────────────── -->
  <div class="marquee-wrap">
    <div class="marquee-track">
      <span class="marquee-item">Intimate Ceremonies <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Grand Receptions <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Floral Design <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Destination Weddings <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Luxury Planning <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Bespoke Experiences <span class="marquee-dot">✦</span></span>
      <!-- duplicate for seamless loop -->
      <span class="marquee-item">Intimate Ceremonies <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Grand Receptions <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Floral Design <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Destination Weddings <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Luxury Planning <span class="marquee-dot">✦</span></span>
      <span class="marquee-item">Bespoke Experiences <span class="marquee-dot">✦</span></span>
    </div>
  </div>

  <!-- Features split ──────────────────────── -->
  <div class="home-features">
    <div class="feature-text reveal">
      <span class="section-tag">Our Philosophy</span>
      <h2 class="section-title">Every love story<br>deserves an <em>extraordinary</em><br>beginning.</h2>
      <p>At Eternelle, we believe weddings are not just events — they are the living expression of your love. Our team of dedicated artisans, planners, and visionaries transforms your dreams into breathtaking reality.</p>
      <p>With over a decade crafting unforgettable celebrations, we bring together the finest vendors, breathtaking venues, and meticulous attention to every detail.</p>
      <div class="stat-row">
        <div class="stat"><div class="stat-num">450+</div><div class="stat-label">Weddings Crafted</div></div>
        <div class="stat"><div class="stat-num">14</div><div class="stat-label">Years of Excellence</div></div>
        <div class="stat"><div class="stat-num">98%</div><div class="stat-label">Client Satisfaction</div></div>
      </div>
    </div>
    <div class="feature-img">
      <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=80" alt="Wedding ceremony" loading="lazy">
      <div class="feature-img-overlay"></div>
    </div>
  </div>

  <!-- Services preview ────────────────────── -->
  <section style="padding:120px 60px 0;background:var(--cream)">
    <div style="text-align:center;margin-bottom:60px" class="reveal">
      <span class="section-tag">What We Offer</span>
      <h2 class="section-title">Services Tailored to <em>Your Vision</em></h2>
    </div>
  </section>
  <div class="services-grid">
    <div class="service-card reveal"><span class="service-icon">💍</span><h3>Full Wedding Planning</h3><p>End-to-end coordination from venue scouting to the final farewell dance. We handle every detail so you can be fully present in your moment.</p></div>
    <div class="service-card reveal"><span class="service-icon">🌸</span><h3>Floral &amp; Décor Design</h3><p>Bespoke floral installations and tablescapes that transform any space into a living work of art tailored to your aesthetic.</p></div>
    <div class="service-card reveal"><span class="service-icon">🍽️</span><h3>Catering &amp; Cuisine</h3><p>Curated menus from award-winning chefs, from intimate sit-down dinners to elaborate cocktail receptions.</p></div>
    <div class="service-card reveal"><span class="service-icon">📸</span><h3>Photography &amp; Film</h3><p>World-class photographers who capture not just moments, but the emotions and stories between them.</p></div>
    <div class="service-card reveal"><span class="service-icon">🎵</span><h3>Entertainment</h3><p>From live orchestras to curated DJ sets — we orchestrate the perfect soundtrack to your celebration.</p></div>
    <div class="service-card reveal"><span class="service-icon">✈️</span><h3>Destination Weddings</h3><p>Dream weddings across the globe — logistics, legalities, and every local vendor handled for you.</p></div>
  </div>

  <!-- Testimonials ────────────────────────── -->
  <div class="testimonial-section">
    <span class="section-tag" style="color:var(--gold)">Stories of Love</span>
    <h2 class="section-title">What Our Couples Say</h2>
    <div class="testimonial-carousel">
      <div class="testimonial active">
        <p class="testimonial-quote">"Eternelle didn't just plan our wedding — they understood the very essence of our relationship and translated it into the most beautiful day of our lives."</p>
        <span class="testimonial-author">— Priya &amp; Arjun, Kerala 2024</span>
      </div>
      <div class="testimonial">
        <p class="testimonial-quote">"From our first consultation to the last dance, the team was impeccable. Our Tuscany wedding was pure, absolute magic."</p>
        <span class="testimonial-author">— Sophie &amp; James, Tuscany 2024</span>
      </div>
      <div class="testimonial">
        <p class="testimonial-quote">"The floral design alone was worth everything. Guests are still talking about it six months later. Eternelle is in a class of their own."</p>
        <span class="testimonial-author">— Nadia &amp; Rohan, Mumbai 2023</span>
      </div>
    </div>
    <div class="testimonial-dots">
      <div class="t-dot active" data-t="0"></div>
      <div class="t-dot" data-t="1"></div>
      <div class="t-dot" data-t="2"></div>
    </div>
  </div>

  <!-- Gallery strip ───────────────────────── -->
  <div class="gallery-strip">
    <div class="gallery-item"><img src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80" alt="" loading="lazy"><div class="gallery-item-overlay"></div></div>
    <div class="gallery-item"><img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80" alt="" loading="lazy"><div class="gallery-item-overlay"></div></div>
    <div class="gallery-item"><img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80" alt="" loading="lazy"><div class="gallery-item-overlay"></div></div>
    <div class="gallery-item"><img src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80" alt="" loading="lazy"><div class="gallery-item-overlay"></div></div>
  </div>

  ${footerHTML()}
`;


/* ════════════════════════════════════════════════
   PAGE 2 — ABOUT
════════════════════════════════════════════════ */
document.getElementById('page-about').innerHTML = /* html */`

  <div class="page-hero">
    <div class="page-hero-bg about-hero-bg"></div>
    <div class="page-hero-content">
      <span class="section-tag">Our Story</span>
      <h1 class="page-hero-title">We Are <em>Eternelle</em></h1>
    </div>
  </div>

  <div class="about-grid">
    <div class="about-content reveal">
      <span class="section-tag">Since 2010</span>
      <h2 class="section-title">Born from a <em>love</em> of love.</h2>
      <p>Eternelle was founded by Maya Krishnan, a former event designer who fell in love with the transformative power of a perfectly planned celebration. What began as a boutique studio in Thrissur has grown into a full-service luxury wedding company trusted by discerning couples across India and beyond.</p>
      <p>Our team of 35+ dedicated professionals brings together backgrounds in interior design, culinary arts, photography, floristry, and hospitality — united by a single purpose: to make your most important day extraordinary in every conceivable way.</p>
      <p>We don't just plan weddings. We architect memories, curate emotions, and create the stage upon which the most beautiful chapter of your story begins.</p>
    </div>
    <div class="about-img">
      <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80" alt="Our team" loading="lazy">
      <div class="about-img-caption">"Every detail is a love letter to your story."</div>
    </div>
  </div>

  <!-- Values -->
  <div class="values-section">
    <div style="text-align:center" class="reveal">
      <span class="section-tag">Our Values</span>
      <h2 class="section-title">What Drives <em>Everything</em> We Do</h2>
    </div>
    <div class="values-grid">
      <div class="value-card reveal"><div class="value-num">01</div><h3>Intentionality</h3><p>Every decision is purposeful, rooted in your unique love story and what matters most to you both.</p></div>
      <div class="value-card reveal"><div class="value-num">02</div><h3>Excellence</h3><p>We hold ourselves to an uncompromising standard. Good enough is never good enough when it comes to your day.</p></div>
      <div class="value-card reveal"><div class="value-num">03</div><h3>Empathy</h3><p>We listen deeply, understand completely, and translate your vision into experiences that feel truly yours.</p></div>
      <div class="value-card reveal"><div class="value-num">04</div><h3>Artistry</h3><p>We approach every element — from florals to music — as an opportunity for genuine creative expression.</p></div>
    </div>
  </div>

  <!-- Team -->
  <div class="team-section">
    <div class="reveal">
      <span class="section-tag">The People</span>
      <h2 class="section-title">Meet the <em>Visionaries</em></h2>
    </div>
    <div class="team-grid">
      <div class="team-card reveal">
        <div class="team-img"><img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80" alt="Maya Krishnan" loading="lazy"></div>
        <h3>Maya Krishnan</h3>
        <div class="team-role">Founder &amp; Creative Director</div>
      </div>
      <div class="team-card reveal">
        <div class="team-img"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Aryan Mehta" loading="lazy"></div>
        <h3>Aryan Mehta</h3>
        <div class="team-role">Lead Event Architect</div>
      </div>
      <div class="team-card reveal">
        <div class="team-img"><img src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=600&q=80" alt="Priya Nair" loading="lazy"></div>
        <h3>Priya Nair</h3>
        <div class="team-role">Head of Floral Design</div>
      </div>
    </div>
  </div>

  ${footerHTML('Crafting extraordinary weddings since 2010.')}
`;


/* ════════════════════════════════════════════════
   PAGE 3 — SERVICES
════════════════════════════════════════════════ */
document.getElementById('page-services').innerHTML = /* html */`

  <div class="page-hero">
    <div class="page-hero-bg services-hero-bg"></div>
    <div class="page-hero-content">
      <span class="section-tag">What We Offer</span>
      <h1 class="page-hero-title">Our <em>Services</em></h1>
    </div>
  </div>

  <div class="services-full">

    <div class="service-row reveal">
      <div class="service-row-img">
        <img src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=900&q=80" alt="Full Planning" loading="lazy">
        <div class="service-row-img-tag">Full Planning</div>
      </div>
      <div class="service-row-content">
        <h2>Complete Wedding <em>Planning</em></h2>
        <p>Our flagship service — a fully immersive partnership where we manage every aspect of your wedding from the first meeting to the final farewell. You dream it; we build it.</p>
        <p>From vendor negotiations and venue selection to timeline management and day-of coordination, our team is your dedicated concierge throughout the entire journey.</p>
        <div class="service-includes">
          <h4>Includes</h4>
          <div class="includes-list">
            <span class="include-tag">Venue Sourcing</span><span class="include-tag">Vendor Management</span>
            <span class="include-tag">Budget Planning</span><span class="include-tag">Timeline Creation</span>
            <span class="include-tag">Day-of Coordination</span><span class="include-tag">Guest Management</span>
          </div>
        </div>
      </div>
    </div>

    <div class="service-row reverse reveal">
      <div class="service-row-img">
        <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=80" alt="Floral Design" loading="lazy">
        <div class="service-row-img-tag">Floral &amp; Décor</div>
      </div>
      <div class="service-row-content">
        <h2>Floral &amp; Décor <em>Design</em></h2>
        <p>Our in-house studio creates breathtaking arrangements and installations that transform spaces into otherworldly environments tailored to your vision.</p>
        <p>Working with the rarest seasonal blooms and locally sourced botanicals, our designers craft everything from delicate bridal bouquets to ceiling-height flower installations.</p>
        <div class="service-includes">
          <h4>Includes</h4>
          <div class="includes-list">
            <span class="include-tag">Bridal Bouquets</span><span class="include-tag">Ceremony Florals</span>
            <span class="include-tag">Table Design</span><span class="include-tag">Installations</span>
            <span class="include-tag">Lighting Design</span>
          </div>
        </div>
      </div>
    </div>

    <div class="service-row reveal">
      <div class="service-row-img">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" alt="Catering" loading="lazy">
        <div class="service-row-img-tag">Cuisine</div>
      </div>
      <div class="service-row-content">
        <h2>Culinary <em>Experiences</em></h2>
        <p>We partner with Kerala's finest chefs to curate menus that blend tradition with contemporary flair — ensuring every bite is as memorable as every moment.</p>
        <p>Whether you envision a traditional Kerala sadya, a refined continental spread, or an eclectic fusion feast, our culinary team delivers perfection on every plate.</p>
        <div class="service-includes">
          <h4>Includes</h4>
          <div class="includes-list">
            <span class="include-tag">Custom Menus</span><span class="include-tag">Tasting Sessions</span>
            <span class="include-tag">Bar Curation</span><span class="include-tag">Dietary Options</span>
            <span class="include-tag">Dessert Bars</span>
          </div>
        </div>
      </div>
    </div>

    <div class="service-row reverse reveal">
      <div class="service-row-img">
        <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=80" alt="Photography" loading="lazy">
        <div class="service-row-img-tag">Photography &amp; Film</div>
      </div>
      <div class="service-row-content">
        <h2>Photography &amp; <em>Cinematography</em></h2>
        <p>We work exclusively with award-winning visual artists who craft a visual narrative as timeless as your love itself.</p>
        <p>Our packages include pre-wedding shoots, same-day edits, and cinematic highlight films that will move you to tears every time you watch them.</p>
        <div class="service-includes">
          <h4>Includes</h4>
          <div class="includes-list">
            <span class="include-tag">Pre-wedding Shoot</span><span class="include-tag">Full Day Coverage</span>
            <span class="include-tag">Highlight Reel</span><span class="include-tag">Drone Footage</span>
            <span class="include-tag">Photo Album</span>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Pricing -->
  <div class="pricing-section">
    <div style="text-align:center" class="reveal">
      <span class="section-tag">Investment</span>
      <h2 class="section-title">Choose Your <em>Experience</em></h2>
    </div>
    <div class="pricing-grid">
      <div class="pricing-card reveal">
        <span class="pricing-tier">Blossom</span>
        <div class="pricing-price">₹3.5L</div>
        <div class="pricing-from">Starting price</div>
        <ul class="pricing-features">
          <li>Day-of Coordination</li><li>Basic Floral Package</li>
          <li>Vendor Recommendations</li><li>Timeline Management</li><li>Email Support</li>
        </ul>
        <a href="#" class="btn-outline" data-page="booking">Enquire Now</a>
      </div>
      <div class="pricing-card featured reveal">
        <span class="featured-tag">Most Popular</span>
        <span class="pricing-tier" style="color:var(--gold)">Eternelle</span>
        <div class="pricing-price" style="color:var(--cream)">₹8.5L</div>
        <div class="pricing-from" style="color:rgba(250,246,240,0.5)">Starting price</div>
        <ul class="pricing-features">
          <li>Full Wedding Planning</li><li>Luxury Floral Design</li>
          <li>Photography Package</li><li>Catering Coordination</li>
          <li>Entertainment Curation</li><li>Dedicated Planner</li><li>Unlimited Consultations</li>
        </ul>
        <a href="#" class="btn-outline" data-page="booking">Book Now</a>
      </div>
      <div class="pricing-card reveal">
        <span class="pricing-tier">Prestige</span>
        <div class="pricing-price">₹18L+</div>
        <div class="pricing-from">Starting price</div>
        <ul class="pricing-features">
          <li>Bespoke Full Planning</li><li>Master Floral Installations</li>
          <li>Cinematic Film Package</li><li>Multi-day Events</li>
          <li>Destination Wedding Support</li><li>VIP Guest Experiences</li><li>Dedicated Team of 5</li>
        </ul>
        <a href="#" class="btn-outline" data-page="booking">Enquire Now</a>
      </div>
    </div>
  </div>

  ${footerHTML('Services tailored to every vision.')}
`;


/* ════════════════════════════════════════════════
   PAGE 4 — CAREERS
════════════════════════════════════════════════ */
document.getElementById('page-careers').innerHTML = /* html */`

  <div class="page-hero">
    <div class="page-hero-bg careers-hero-bg"></div>
    <div class="page-hero-content">
      <span class="section-tag">Join the Team</span>
      <h1 class="page-hero-title">Build a <em>Career</em><br>You Love</h1>
    </div>
  </div>

  <div class="careers-intro">
    <div class="reveal">
      <span class="section-tag">Why Eternelle</span>
      <h2 class="section-title">Work where <em>passion</em> meets purpose.</h2>
    </div>
    <div class="careers-intro-grid">
      <div class="careers-intro-text reveal">
        <p>At Eternelle, we are more than a workplace — we are a creative family united by a belief that every couple deserves an extraordinary beginning. We're always looking for passionate, talented individuals who want to make a tangible difference in the lives of others.</p>
        <p>Whether you're a seasoned event professional or a fresh creative talent eager to learn, we offer an environment where your growth is our priority and your work creates genuine joy in the world.</p>
      </div>
      <div class="perks-grid reveal">
        <div class="perk-item"><h4>Creative Freedom</h4><p>We encourage bold ideas and reward innovative thinking at every level.</p></div>
        <div class="perk-item"><h4>Learning Budget</h4><p>Annual stipend for courses, workshops, and industry events.</p></div>
        <div class="perk-item"><h4>Flexible Culture</h4><p>Hybrid working, flexible hours, and genuine work-life integration.</p></div>
        <div class="perk-item"><h4>Health &amp; Wellness</h4><p>Comprehensive health insurance and wellness program for all staff.</p></div>
      </div>
    </div>
  </div>

  <div class="openings-section">
    <div class="reveal">
      <span class="section-tag">Open Positions</span>
      <h2 class="section-title">Current <em>Openings</em></h2>
    </div>
    <div class="job-list">
      <div class="job-item reveal"><div><div class="job-title">Senior Wedding Planner</div><div class="job-dept">Events</div></div><div class="job-type">Full-time · Thrissur</div><a href="#apply-form" class="job-apply">Apply Now →</a></div>
      <div class="job-item reveal"><div><div class="job-title">Floral Design Lead</div><div class="job-dept">Creative Studio</div></div><div class="job-type">Full-time · Thrissur</div><a href="#apply-form" class="job-apply">Apply Now →</a></div>
      <div class="job-item reveal"><div><div class="job-title">Wedding Photographer</div><div class="job-dept">Photography</div></div><div class="job-type">Freelance · Pan-India</div><a href="#apply-form" class="job-apply">Apply Now →</a></div>
      <div class="job-item reveal"><div><div class="job-title">Client Experience Manager</div><div class="job-dept">Client Relations</div></div><div class="job-type">Full-time · Thrissur</div><a href="#apply-form" class="job-apply">Apply Now →</a></div>
      <div class="job-item reveal"><div><div class="job-title">Social Media &amp; Content Creator</div><div class="job-dept">Marketing</div></div><div class="job-type">Full-time · Remote</div><a href="#apply-form" class="job-apply">Apply Now →</a></div>
      <div class="job-item reveal"><div><div class="job-title">Event Production Assistant</div><div class="job-dept">Events</div></div><div class="job-type">Internship · Thrissur</div><a href="#apply-form" class="job-apply">Apply Now →</a></div>
    </div>
  </div>

  <div class="apply-section" id="apply-form">
    <div class="reveal">
      <span class="section-tag">Application</span>
      <h2 class="section-title">Apply <em>Today</em></h2>
    </div>
    <div class="apply-form-wrap">
      <div class="form-row">
        <div class="form-group"><label class="form-label">First Name</label><input type="text" class="form-input" placeholder="Your first name"></div>
        <div class="form-group"><label class="form-label">Last Name</label><input type="text" class="form-input" placeholder="Your last name"></div>
      </div>
      <div class="form-group"><label class="form-label">Email Address</label><input type="email" class="form-input" placeholder="your@email.com"></div>
      <div class="form-group">
        <label class="form-label">Position Applying For</label>
        <select class="form-select">
          <option value="">Select a position</option>
          <option>Senior Wedding Planner</option>
          <option>Floral Design Lead</option>
          <option>Wedding Photographer</option>
          <option>Client Experience Manager</option>
          <option>Social Media &amp; Content Creator</option>
          <option>Event Production Assistant</option>
        </select>
      </div>
      <div class="form-group"><label class="form-label">Portfolio / LinkedIn URL</label><input type="url" class="form-input" placeholder="https://yourportfolio.com"></div>
      <div class="form-group"><label class="form-label">Why Eternelle?</label><textarea class="form-textarea" placeholder="Tell us what drives you and why you'd love to be part of our team..."></textarea></div>
      <button class="btn-submit">Submit Application</button>
    </div>
  </div>

  ${footerHTML('Join a team that creates magic for a living.')}
`;


/* ════════════════════════════════════════════════
   PAGE 5 — BOOKING
════════════════════════════════════════════════ */
document.getElementById('page-booking').innerHTML = /* html */`

  <div class="page-hero">
    <div class="page-hero-bg booking-hero-bg"></div>
    <div class="page-hero-content">
      <span class="section-tag">Reserve Your Date</span>
      <h1 class="page-hero-title">Begin Your <em>Story</em></h1>
    </div>
  </div>

  <div class="booking-section">
    <div class="reveal">
      <span class="section-tag">Consultation Request</span>
      <h2 class="section-title">Let's Plan Something <em>Extraordinary</em></h2>
    </div>
    <div class="booking-grid">

      <!-- Left: steps + form -->
      <div>
        <div class="booking-steps reveal">
          <div class="step"><div class="step-num">01</div><div class="step-content"><h4>Fill the Form</h4><p>Share your vision, date, and initial ideas so we can prepare for our first meeting.</p></div></div>
          <div class="step"><div class="step-num">02</div><div class="step-content"><h4>Free Consultation</h4><p>A 60-minute call with your dedicated planner to explore possibilities and align on vision.</p></div></div>
          <div class="step"><div class="step-num">03</div><div class="step-content"><h4>Custom Proposal</h4><p>A bespoke proposal tailored to your dreams and budget within 5 business days.</p></div></div>
        </div>
        <div class="reveal">
          <div class="form-row">
            <div class="form-group"><label class="form-label">Your Name</label><input type="text" class="form-input" placeholder="Full name"></div>
            <div class="form-group"><label class="form-label">Partner's Name</label><input type="text" class="form-input" placeholder="Full name"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="your@email.com"></div>
            <div class="form-group"><label class="form-label">Phone</label><input type="tel" class="form-input" placeholder="+91 00000 00000"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Wedding Date</label><input type="date" class="form-input"></div>
            <div class="form-group">
              <label class="form-label">Estimated Guest Count</label>
              <select class="form-select">
                <option value="">Select range</option>
                <option>Under 50 guests</option><option>50–100 guests</option>
                <option>100–250 guests</option><option>250–500 guests</option><option>500+ guests</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Service Required</label>
            <select class="form-select">
              <option value="">Select a package</option>
              <option>Blossom Package (Day Coordination)</option>
              <option>Eternelle Package (Full Planning)</option>
              <option>Prestige Package (Bespoke Experience)</option>
              <option>Not sure yet — advise me</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">Tell Us About Your Vision</label><textarea class="form-textarea" placeholder="Share your dream wedding, preferred location, aesthetic inspirations..."></textarea></div>
          <button class="btn-submit">Request Consultation</button>
        </div>
      </div>

      <!-- Right: info cards -->
      <div class="reveal" style="padding-top:20px">
        <div class="info-card"><h4>📞 Prefer to Call?</h4><p>Our team is available Mon–Sat, 10am–7pm IST. Call +91 98765 43210 to speak with a planner right away.</p></div>
        <div class="info-card"><h4>📅 Availability</h4><p>We take on a limited number of weddings each year to ensure every couple receives our full attention. Enquire 12–18 months ahead for peak dates.</p></div>
        <div class="info-card"><h4>✈️ Destination Weddings</h4><p>We plan weddings across India, Southeast Asia, and Europe. Travel coordination is included in our Prestige package.</p></div>
        <div class="info-card"><h4>💬 Response Time</h4><p>We respond to all consultation requests within 24 business hours. For urgent enquiries, please call us directly.</p></div>
      </div>

    </div>
  </div>

  ${footerHTML('Your extraordinary day begins with a single conversation.')}
`;


/* ════════════════════════════════════════════════
   PAGE 6 — CONTACT
════════════════════════════════════════════════ */
document.getElementById('page-contact').innerHTML = /* html */`

  <div class="page-hero">
    <div class="page-hero-bg contact-hero-bg"></div>
    <div class="page-hero-content">
      <span class="section-tag">Get in Touch</span>
      <h1 class="page-hero-title">We'd Love to <em>Hear From You</em></h1>
    </div>
  </div>

  <div class="contact-section">
    <div class="reveal">
      <span class="section-tag">Connect</span>
      <h2 class="section-title">Let's Start a <em>Conversation</em></h2>
    </div>
    <div class="contact-grid">

      <!-- Left: details -->
      <div class="reveal">
        <div class="contact-item"><span class="contact-item-label">Studio Address</span><div class="contact-item-value">123 Garden Lane, Sakthan Nagar<br>Thrissur, Kerala — 680 001</div></div>
        <div class="contact-item"><span class="contact-item-label">Email</span><div class="contact-item-value"><a href="mailto:hello@eternelle.co">hello@eternelle.co</a></div></div>
        <div class="contact-item"><span class="contact-item-label">Phone</span><div class="contact-item-value"><a href="tel:+919876543210">+91 98765 43210</a></div></div>
        <div class="contact-item"><span class="contact-item-label">WhatsApp</span><div class="contact-item-value"><a href="#">+91 98765 43210</a></div></div>
        <div class="contact-hours">
          <h3>Studio <em>Hours</em></h3>
          <div class="hours-row"><span>Monday – Friday</span><span>10:00 AM – 7:00 PM</span></div>
          <div class="hours-row"><span>Saturday</span><span>10:00 AM – 5:00 PM</span></div>
          <div class="hours-row"><span>Sunday</span><span>By Appointment Only</span></div>
        </div>
      </div>

      <!-- Right: form -->
      <div class="reveal">
        <div class="form-group"><label class="form-label">Your Name</label><input type="text" class="form-input" placeholder="Full name"></div>
        <div class="form-group"><label class="form-label">Email Address</label><input type="email" class="form-input" placeholder="your@email.com"></div>
        <div class="form-group"><label class="form-label">Phone Number</label><input type="tel" class="form-input" placeholder="+91 00000 00000"></div>
        <div class="form-group">
          <label class="form-label">Subject</label>
          <select class="form-select">
            <option value="">What can we help with?</option>
            <option>Wedding Planning Enquiry</option><option>Service Information</option>
            <option>Pricing &amp; Packages</option><option>Vendor Partnership</option>
            <option>Press &amp; Media</option><option>General Query</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">Message</label><textarea class="form-textarea" style="min-height:150px" placeholder="Share your thoughts, questions, or how we can help..."></textarea></div>
        <button class="btn-submit">Send Message</button>

        <div class="contact-map">
          <div class="map-placeholder">
            <span class="map-pin">📍</span>
            123 Garden Lane, Thrissur<br>
            <small style="font-family:'Jost',sans-serif;font-size:0.72rem;font-style:normal;letter-spacing:0.08em;margin-top:8px;display:block">Google Maps integration available on deployment</small>
          </div>
        </div>
      </div>

    </div>
  </div>

  ${footerHTML("We're here whenever you're ready to begin.")}
`;


/* ════════════════════════════════════════════════
   BOOTSTRAP
   After all pages are injected, initialise
   components that depend on DOM presence.
════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // ScrollReveal picks up the newly injected .reveal elements
  if (window.ScrollReveal) window.ScrollReveal.observe();
});
