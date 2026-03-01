# 🧪 Evolution Media Automation - Test Instructions

## Deployment Status: 🔄 Deploying to Vercel

### URLs to Test:
1. **Main Site:** https://evolutionmediagroup.eu
2. **Order Form:** https://evolutionmediagroup.eu/#order
3. **Examples:** https://evolutionmediagroup.eu/#examples

### What to Test:

#### 1. **Order Form Flow**
- Navigate to https://evolutionmediagroup.eu/#order
- Click "Order Your Website - €500"
- Fill out the 4-step form:
  - Step 1: Business info (name, email, industry)
  - Step 2: Review order summary
  - Step 3: Payment section (demo - no real charge)
  - Step 4: Success confirmation
- Verify form submits successfully

#### 2. **Real Example Links**
- Click "Dublin Yoga Studio" example
- Should open: https://dublin-yoga-studio.vercel.app/
- Click "Golden Dragon Chinese Restaurant"  
- Should open: https://golden-dragon-chinese.vercel.app/

#### 3. **Mobile Responsiveness**
- Test on mobile device or browser dev tools
- Verify all sections display correctly
- Check form usability on mobile

#### 4. **Performance**
- Page should load quickly (< 3 seconds)
- Images should be optimized
- No console errors

### Expected Behavior:

#### Order Form Submission:
1. **Form Data:** Captures business name, email, industry
2. **API Call:** Attempts to call `http://localhost:6001/generate`
3. **Success:** Shows order confirmation with tracking ID
4. **Fallback:** If API unavailable, shows demo success message

#### Stats Display:
- €1,000+ Revenue Today
- 19min Average Build Time
- 100% Satisfaction Rate
- 24h Delivery Guarantee

#### Navigation:
- Smooth scrolling to sections
- Working internal links
- External links open in new tabs

### Testing Checklist:
- [ ] Main page loads without errors
- [ ] Order form is accessible (#order section)
- [ ] Form steps work correctly (1→2→3→4)
- [ ] Example links work (open deployed websites)
- [ ] Mobile responsive design
- [ ] No JavaScript errors in console
- [ ] Images load properly
- [ ] Stats display correctly
- [ ] CTA buttons are clickable

### Known Issues:
- **Vercel Build Time:** First deployment takes 2-3 minutes
- **API Connectivity:** Localhost:6001 only works on server (not public)
- **Payment:** Stripe integration not yet connected (demo mode)

### Success Criteria:
- ✅ Order form completes all 4 steps
- ✅ Example websites open correctly
- ✅ Mobile experience is good
- ✅ No broken links or errors
- ✅ Professional appearance maintained

**Test the live site in 2-3 minutes once Vercel deployment completes!**
