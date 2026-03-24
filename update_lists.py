import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = {
    r'<p class="product-desc">Outstanding water resistance, high chemical &amp; physical durability. Perfect for indoor/outdoor applications including swimming pools and industrial areas.</p>': 
    '''<ul class="product-desc bullet-list">
              <li>Outstanding water resistance</li>
              <li>High chemical &amp; physical durability</li>
              <li>Perfect for indoor/outdoor, pools, and industrial areas</li>
            </ul>''',

    r'<p class="product-desc">Ready-to-use standard tile adhesive. Superior bonding compared to sand-cement mix. Non-sagging with excellent flexibility for thermal movements.</p>':
    '''<ul class="product-desc bullet-list">
              <li>Ready-to-use standard tile adhesive</li>
              <li>Superior bonding compared to sand-cement mix</li>
              <li>Non-sagging with excellent flexibility for thermal movements</li>
            </ul>''',

    r'<p class="product-desc">High-performance tile adhesive for larger format tiles. Excellent bond strength for both indoor and outdoor elevation applications.</p>':
    '''<ul class="product-desc bullet-list">
              <li>High-performance adhesive for larger format tiles</li>
              <li>Excellent bond strength</li>
              <li>Ideal for both indoor and outdoor elevation applications</li>
            </ul>''',

    r'<p class="product-desc">Our most powerful tile adhesive for any size tiles. Handles outdoor elevation and mosaic tiles on any surface with unmatched bond strength.</p>':
    '''<ul class="product-desc bullet-list">
              <li>Our most powerful tile adhesive for any size tiles</li>
              <li>Handles outdoor elevation and mosaic tiles</li>
              <li>Unmatched bond strength on any surface</li>
            </ul>''',

    r'<p class="product-desc">Flexible cement-based powder with additives for water resistance. Low shrinkage, high cohesiveness, and excellent workability for perfect joint filling.</p>':
    '''<ul class="product-desc bullet-list">
              <li>Flexible cement-based powder with water resistance additives</li>
              <li>Low shrinkage and high cohesiveness</li>
              <li>Excellent workability for perfect joint filling</li>
            </ul>'''
}

for old, new in replacements.items():
    html = html.replace(old, new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html")
