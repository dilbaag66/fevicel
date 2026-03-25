import re
import os

os.chdir('/home/sukhanjeetss/.openclaw/workspace/fevicel')

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove the branding block I added earlier
branding_block = '''<div class="contact-branding" style="margin-top: 40px; display: flex; align-items: center; gap: 16px; padding-top: 24px; border-top: 1px solid var(--border);">
            <img src="logo.jpg" alt="Fevicel Logo" style="width: 70px; height: auto; border-radius: 8px;">
            <div>
              <h3 style="color: var(--primary); font-size: 1.6rem; margin-bottom: 2px;">JSM Group</h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem; margin: 0;">Makers of Fevicel</p>
            </div>
          </div>'''

html = html.replace(branding_block, '')

# Update Footer Brand
old_footer = '''<div class="footer-logo">
            <img src="logo.jpg" alt="FEVICEL Logo" class="footer-logo-img" />
          </div>'''

new_footer = '''<div class="footer-logo" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px;">
            <img src="logo.jpg" alt="FEVICEL Logo" class="footer-logo-img" style="max-height: 40px; width: auto;" />
            <div style="text-align: right; line-height: 1.2;">
              <h3 style="color: var(--primary); font-size: 1.3rem; margin: 0;">JSM Group</h3>
              <p style="color: var(--text-secondary); font-size: 0.75rem; margin: 0;">Makers of Fevicel</p>
            </div>
          </div>'''

html = html.replace(old_footer, new_footer)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updates applied.")
