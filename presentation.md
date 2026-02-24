## Let Me Be Sphere:
### Interactive Visualizations of Projective Varieties in Spherical Geometry
Katie Hess, Charlie Ruppe, and Jake Schaefer

Note: Read title and names

---

## Overview
* Projective Space
* Spherical Geometry
* New Images and Visualizations
* How To Make Beautiful Images Using Math

Note: We will begin by explaining what we mean by projective space and spherical
geometry, and how they relate.

Then we will show you some of our images and interactive visualizations of
objects in spherical geometry and projective space.

Finally we will teach you how to make your own pictures of these objects using
some math and a little cleverness.

---

# Projective Space

---

From Euclid's Elements Book 1.

<img src="images/euclidsparallellines.png">

"Parallel lines do not meet."

Today we will disobey Euclid and consider:

what if we allowed parallel lines to meet *somewhere*.


---

### Motivation: Perspective In Art
Since the Renaissance, artists have used "vanishing points" to represent
3-dimensional geometry on a flat canvas.

<img height="200" src="images/Cappella_brancacci,_Guarigione_dello_storpio_e_resurrezione_di_Tabita_(restaurato),_Masolino.jpeg" data-preview-image data-preview-fit="cover">
<img height="200" src="images/first_use_of_perspective_with_lines.png" data-preview-image data-preview-fit="cover">

Parallel lines are drawn meeting at a shared vanishing point which depends on the
direction they are headed.

Note: The picture circa 1423 is Masolino da Panicale's "St. Peter Healing a
Cripple and the Raising of Tabitha," the earliest extant artwork known to use a
consistent vanishing point.

Parallel lines are continued and found to meet at the vanishing point whose
position depends on the direction of the parallel lines.

Different direction in the scene and you get a different vanishing point.

---

The painter colors each point of the canvas by following his line of sight until
it hits an object.

<img height="250" style="margin:0;" src="images/penroseillustration.png" data-preview-image data-preview-fit="cover">

The line for the vanishing point never hits the scene, so the vanishing point is
placed infinitely far away.

We include these points at infinity into our space to get *projective geometry*.

Note:
*click the photo*

You can trace the painters line of sight through the page and out into the scene

The line for the vanishing point never hits the scene so the vanishing point
could only be placed infinitely far away.

We include these points at infinity into our scene to get projective geometry.

At this point your calculus teacher would protest because I
am using infinity like a real distance that can exist.

If you suspend your discomfort I will tell you how a concrete way of
representing these points at infinity.

---

Points of the *projective plane* can be represented using the artistic method of
perspective projection.

<img height="350" src="images/Vanishing_point.svg">

**Fact**: In the projective plane *any* two lines intersect at exactly one point.

Note:
Points in the ground plane give you a unique point in the image plane by
following the line of sight to O.

Even our vanishing points which don't strictly exist in the scene can be represented
on the image plane.

This diagram shows that even parallel lines must meet at a point when
represented on the image plane.

This highlights our first property of the projective plane. Any two lines
intersect at exactly one point.

---

Some nice theorems in projective space:
<div style="display: flex; align-items: flex-start; gap: 20px;">
  <div style="flex: 1; text-align: left;">
    <ul>
      <li><strong>Bezout's Theorem:</strong> The number of intersection points of two polynomials is the product of their degrees.</li>
      <li>All smooth <strong>conic sections</strong> (ellipses, parabolas, hyperbolas) are equivalent in projective space.</li>
      <li><strong>Duality:</strong> You can swap the words "line" and "point" in any theorem to get a new valid theorem.</li>
    </ul>
  </div>
  <div style="flex: 0.4;">
    <img src="images/bezout-cubic-quartic.jpg" style="width: 100%; border: none; box-shadow: none;">
    <img src="images/conic-section.png" style="width: 70%; border: none; box-shadow: none;">
  </div>
</div>

Note:

There are lots of nice results that are only true in projective space such as
Bezout's theorem which counts the number of intersection points of curves
according to their degree.

In projective space we find that all smooth conic sections are equivalent.

Every theorem in projective space has a dual where you swap the words "line" and
"point".

We don't have time in this presentation to explain how all of this works.  But
know that projective space pops up in important ways across math and even
physics.

---

Using the artistic model of projective space shown before we are unable to
represent all points.

<img height="300" src="images/Vanishing_point.svg">

**Problem**: We can't use a point on the image plane to represent the point directly below $O$.


Note:
But back to our model of projective space.

We run into a problem when we try and represent a point directly below O. The
line of sight doesn't intersect the image plane.

In fact in the way it's shown here we aren't representing points behind O
either.

---

### Sphere Model of Projective Space

<img src="images/spheremodel.png">

Take the line going from the Eye to some point $P$ on the plane.  The intersection
of that line and the sphere gives us a representative point.

Note:


---

**Problem**: Two lines must intersect in just one point!


<img height='250' src="images/spheremodel.png" style="margin: -10px">

To fix this we will identify each point on the sphere with its antipode.
Considering both to be two representatives of the same point.

Now points on the sphere above the $Z=0$ plane also have a meaning, given by
their antipode.

Note:

It looks like the parallel lines are intersecting in two places.

We fix this by identifying antipodal points.

A mathematician might say we are glueing the sphere to itself, but there is no
good way to physically do this in three dimensions.

For the experts in the room, I've just defined a 2 to 1 covering map from the
2-sphere to the real projective plane.

---

So far we've been working with the projective plane and the typical sphere $S^2$.

It turns out you this same construction works for 3D projective space, except
now we have to use a higher dimensional sphere $S^3$ living in 4D space.

<figure style="margin-top: 20px">
<img height="300" src="images/Hypersphere.png" >
<figcaption style="font-size: 0.6em; margin-top:-20px">
The direct projection of $S^3$ onto $\mathbb R^3$.
</figcaption>
</figure>

---

# Spherical Geometry

---

### Geodesics on a Sphere

In Euclidean flat space, the shortest path between two points is a straight line.

But we must redefine this notion if we restrict ourselves to the surface of a sphere.

<img height="300" src="images/download.png" >


Note: 

In order to model projective space using a sphere, we need to understand the geometry of living on the sphere itself.
In Euclidean flat space, the shortest path between two points is a straight line.
But if we must find this path given that we are not allowed to leave the surface of the sphere we must redefine distance to be measured along the surface
meaning that the shortest paths between two points, or geodesics, are no longer ordinary straight lines, they are the arcs of great circles, with a great circle defined as the intersection of a plane through the origin of the sphere with the sphere itself, so the equator is a great circle, lines of longitude are great circles. 

and actually in spherical geometry, light rays themselves follow geodesics, so every ray in our graphics visualizations are moving along great circles in s3

---

### From $S^2$ to $S^3$


The 3-sphere lives in four dimensions, so our intution for it comes via analogy

Geodesics are still great circles, two geodesics will converge at the antipodal point, and there is no infinity to escape to.

<img src="images/Hypersphere.gif" height="300">

Note:

Everything I’ve just said about the 2-sphere also works one dimension higher. So if we think of the 2 sphere as a ball living in 3 dimensional space, then the 3 sphere lives in four-dimensional space, and we can’t necessarily see it directly right in front of us like you can see a ball in front of you, but we can draw analogies to how things work on the 2 sphere and reason how things would work were we to live on the 3-sphere. 

The most important property to us is that if you continue to travel along a geodesic, you don’t go off to infinity.
You eventually reach the antipodal point, the exact opposite point to your starting point on the sphere, and then if you keep going you return to where you started.
So spherical geometry is compact you cannot escape or run off . 
And this aligns really well with what properties we want to help us visualize projective space, because if we send out two separate geodesics that seem like they would naturally diverge , they will actually converge at the antipodal point, and what we once thought of as infinity is simply where straight lines in our new universe come back together

this is an extrinsic visualization of the hypersphere and its rotations but we are going to be doing intrinsic visualization so living in the space


---

### The Earth in the $S^3$ Geometry


<iframe width="1000" height="600" frameborder="0" src="earthdemo.html" allowfullscreen></iframe>

Note:

So what we see in this visualization is the earth moving along a geodesic in s3, as we remain at a fixed point. 
as it approaches it of course grows larger in our view, and we are actually able to see more of it than we would in euclidean space, as our space has positive curvature.

alright now we've entered the earth

and now the earth is actually behind us but it remains visible since light rays are allowed to travel all the way around the sphere we can still see it, it's just oriented upside down 

when the sphere reaches the antipodal point it actually takes up our entire screen, and this is because the object is now the same distance from us in every direction so every light ray we emit is hitting it 


so as it passes the antipode it appears to wrap around us and the orientation flips

and now it's coming back towards us, but it's actually shrinking because it's smallest size is pi/2 radians away from us, at the equator

and now we see it naturally coming back around the sphere towards us again


---

# New Images and Visualizations

---

## Cubic Surface With 27 Lines

A famous theorem in algebraic geometry says that smooth cubic surfaces contain
27 straight lines!

<img src="images/cubicmodel1.jpeg" height="150" data-preview-image data-preview-fit="cover">
<img src="images/cubicmodel2.jpeg" height="150" data-preview-image data-preview-fit="cover">
<img src="images/cubicmodel3.jpeg" height="150" data-preview-image data-preview-fit="cover">
<img src="images/cubicmodel4.jpeg" height="150" data-preview-image data-preview-fit="cover">

Before computers, models made of plaster, wood, metal, string and paper mâché
were used as a pedagogical tool. Students would learn about the model by
sketching it.

Note:

These are some models that Katie and I had the pleasure of seeing last week at the 
Maison Poincaré.

Before computers, models made of plaster, wood, metal, string and paper mâché
were used as a pedagogical tool. Students would learn about the model by
sketching it.

One of the difficulties of these models is that you must carefully pick
coefficients so that none of the interesting structure is "at infinity" and
subsequently not pictured by the model.

We have followed in the footsteps of these students by producing our own
illustrations of these surfaces.

---

## Cubic Surface With 27 Lines

<iframe style="width: 100%; aspect-ratio: 16/8; border: none; margin: 0;" src="cubic_demo/index.html"></iframe>

The coefficient minimap shows where the surface becomes singular and the
topology changes.

Note:
This is our software in action. An interactive demo that lets you move around
the 3-sphere viewing a specific cubic surface.

The minimap at the bottom left represents the coefficients of the defining cubic
polynomial in a slice of the full parameter space. The white curves on this
minimap denote the singular locus and the different colors represent different
real topology that the surface can have.

For example in the grey region the surface is topologically like a plane.  In
the blue region the surface contains that plane and a topological sphere.  In
the maroon region the surface has the most complicated topology, and has 27 real
lines.

---

<div style="display: grid; height: 100vh; gap: 10px; padding: 10px; box-sizing: border-box; grid-template-columns: repeat(2, 1fr);">
<img src="images/cubic1.png">
<img src="images/cubic2.png">
<img src="images/cubic3.png">
<img src="images/cubic4.png">
</div>

---

<div style="display: grid; height: 100vh; gap: 10px; padding: 10px; box-sizing: border-box; grid-template-columns: repeat(2, 1fr);">
<img src="images/cubic5.png">
<img src="images/cubic6.png">
<img src="images/cubic7.png">
<img src="images/cubic8.png">
</div>

---

## Degree 4 Surface Containing a Line

<iframe style="width: 100%; aspect-ratio: 16/8; border: none; margin: 0;" src="quartic_demo/index.html"></iframe>

A plane containing the line intersected with the surface gives a degenerate
degree 4 curve of a line and a degree 3 curve.

Note:
To the experts in the room, this is a picture of an elliptic K3 surface, meaning
the surface is an elliptic fibration over $\mathbb P^1$.

What you’re seeing is a real quartic surface inside the 3-sphere, defined implicitly by a homogeneous degree-four polynomial in four variables. The polynomial is built so that it always contains a fixed line, which appears here in blue. 
Now we take the pencil of planes that pass through that line. Each plane cuts the quartic in a degree-four curve, but because the line is already contained in the surface, the intersection splits into that fixed line together with a cubic curve.  At special angles, the cubic degenerates and that’s the moment where you see the pink intersection curve change type. So visually, this animation is showing a pencil of elliptic curves living on a quartic surface.

---


<div style="display: grid; height: 50vh; gap: 10px; padding: 10px; box-sizing:
border-box; grid-template-rows: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr)">
<img style="height: 100%" src="images/quartic2.png">
<img style="height: 100%" src="images/quartic3.png">
<img style="height: 80%" src="images/quartic4.png">
<img style="height: 80%" src="images/quartic1.png">
</div>

Note:
To the experts in the room, this is a picture of an elliptic K3 surface, meaning
the surface is an elliptic fibration over $\mathbb P^1$.

What you’re seeing is a real quartic surface inside the 3-sphere, defined implicitly by a homogeneous degree-four polynomial in four variables. The polynomial is built so that it always contains a fixed line, which appears here in blue. 
Now we take the pencil of planes that pass through that line. Each plane cuts the quartic in a degree-four curve, but because the line is already contained in the surface, the intersection splits into that fixed line together with a cubic curve.  At special angles, the cubic degenerates and that’s the moment where you see the pink intersection curve change type. So visually, this animation is showing a pencil of elliptic curves living on a quartic surface.

---

# How To Make Beautiful Images Using Math

## Rendering

We pretend each pixel on our computer is looking along a tiny line of sight. 

Rendering means choosing what (color) we see at every single pixel from our POV

### The Problem

How can we quickly figure out what our camera sees first along each pixel-direction and do it one-million-times fast?
Note:
We basically steal the Renaissance painter's trick: every pixel is a tiny line of sight.

---
## Ray Marching in Brief
1. Shoot a ray out of the lens of the camera 
2. Using an SDF, trace the ray's path until it hits an object
3. Color the pixel using that hit point
4. Use information from the geometry to create cool effects!

<img height="300" src="images/ray_march.png">
<!-- <img height="300" src="images/cow.png"> -->

Note:
Just like our eyes! Hawk Tuah! 
(line of sight) *whip noise*
Signed distance function checks if we are outside or inside an object. 
Tracing a geodesic is like following a path with your bike and not having to turn the handles

Ray tracing would be when we intersect rays with a rasterized mesh. Our scenes arent defined by discrete triangles,
but by implicit equations, so we walk along the ray until we reach the surface

---

## But how to fast? SDF

Approximate! Dont solve each intersection exactly, we use a signed distance function

Tells us how far we are, and in what direction, from an object.

In spherical geometry, we use a local estimate to tell us about our geometry



Note:
Use it to tell us how much we can move along our path safely (fawr -> big step, near -> smwall stwep)
In our spherical/projective world, rays may not be straight, but are geodesics, yet marching logic is identical...step forward using a local distance estimate.


---

# *Thank you for your attention.*

Any questions?

