import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the hero badge text with the image
old_hero_badge = '''<div class="hero-badge" data-aos="fade-down">
        <span>IS 15477 : 2019 Certified</span>
      </div>'''
new_hero_badge = '''<div class="hero-badge" data-aos="fade-down" style="background: none; border: none; padding: 0;">
        <img src="isi_mark.jpg" alt="ISI Mark IS 15477 : 2019" style="height: 90px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);" />
      </div>'''
html = html.replace(old_hero_badge, new_hero_badge)

# Replace the text in the footer
old_footer_cert = '<p class="footer-cert">IS 15477:2019 Certified &middot; CML NO. 0700223704</p>'
new_footer_cert = '<img src="isi_mark.jpg" alt="ISI Mark" style="height: 60px; margin-top: 10px; border-radius: 6px;" />'
html = html.replace(old_footer_cert, new_footer_cert)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updates applied.")
