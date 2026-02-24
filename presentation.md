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

---

Parallel lines can never touch, but the painter still draws
them converging at a point "infinitely far away."

<img height="300" src="images/penroseillustration.png" data-preview-image data-preview-fit="cover">

*Projective Geometry* is when we take these vanishing points seriously by
adjoining "points at infinity" to normal Euclidean space.

Note:
In this picture the artist can point to the vanishing point on his drawing,
but following that line of sight won't actually reach anything in the real
world.

What we'll do is pretend that the vanishing point exists in the real world and
determine it's relation to the other points using the drawing.

---


We can represent many points of the *projective plane* using the artistic method
of perspective projection.

<img height="350" src="images/Vanishing_point.svg">

**Fact**: In the projective plane *any* two lines intersect at exactly one point.

Note:
Here we can represent many points of the 2D space on the bottom using
points on the image plane. What's labeled as the vanishing point is just the way
of representing the vanishing point on the image plane.

Instead of saying that non-parallel lines intersect at one point, we can say that
any two lines intersect at exactly one point.

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

Note: We don't have time in this presentation to explain how all of this works.
But know that projective space pops up all over math and physics.

---

### Plane Model of Projective Space

Using the artistic model of projective space shown before we are unable to
represent all points.

<img height="300" src="images/Vanishing_point.svg">

**Problem**: We can't use a point on the image plane to represent the point directly below $O$.


Note:
In fact in the way it's shown here we aren't representing points behind O either.

---

### Sphere Model of Projective Space

<img src="images/spheremodel.png">

Take the line going from the Eye to some point $P$ on the plane.  The intersection
of that line and the sphere gives us a representative point.

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

So far we've been working with 2D projective geometry, the projective plane.

It turns out you this same construction works for 3D projective space, except
now we have to use a hypersphere living in 4D space.

<figure style="margin-top: 20px">
<img height="300" src="images/Hypersphere.png" >
<figcaption style="font-size: 0.6em; margin-top:-20px">
The direct projection of the hypersphere onto $\mathbb R^3$.
</figcaption>
</figure>

---

# Spherical Geometry

---

### Geodesics on a Sphere

In Euclidean flat space, the shortest path between two points is a straight line

But we must redefine this notion if we restrict ourselves to the surface of a sphere

<img height="300" src="images/download.png" >

[Define what a geodesic is by first defining a notion of distance on the sphere,
and that the geodesic is the shortest path]

Note: 

In order to model projective space using a sphere, we need to understand the geometry of the sphere itself.
In Euclidean flat space, a straight line is the shortest path between two points.
But if we must find this path given that we are not allowed to leave the surface of the sphere we must redefine distance to be measured along the surface
meaning that the shortest paths, or geodesics, are no longer ordinary straight lines, they are the arcs of great circles, with a great circle defined as the intersection of a plane through the origin of the sphere with the sphere itself, so the equator is a great circle, lines of longitude are great circles. 

---

### From $S^2$ to $S^3$


The 3-sphere lives in four dimensions, so our intution for it comes via analogy

Geodesics are still great circles, two geodesics will converge at the antipodal point, and there is no infinity to escape to.


[Explain spherical geometry for S^2 and then argue by analogy that it works
similarly in S^3.]
[Specifically discuss how geodesics converge at the antipodal point]

Note:

Everything I’ve just said about the 2-sphere also works one dimension higher. So if we think of the 2 sphere as a ball living in 3 dimensional space, then the 3 sphere lives in four-dimensional space, and we can’t necessarily see it directly right in front of us like you can see a ball in front of you, but we can draw analogies to how things work on the 2 sphere and reason how things would work were we to live on the 3-sphere. 

The most important property to us is that if you continue to travel along a geodesic, you don’t go off to infinity.
You eventually reach the antipodal point, the exact opposite point to your starting point on the sphere, and then if you keep going you return to where you started.
So spherical geometry is compact you cannot escape or run off . 
And this aligns really well with what properties we want to help us visualize projective space, because if we send out two separate geodesics that seem like they would naturally diverge , they will actually converge at the antipodal point, and what we once thought of as infinity is simply where straight lines in our new universe come back together

---

[Include the interactive demo of the earth in S^3 in an iframe]

Note:
So what you see here is what the Earth would look like if we were moving along a geodesic in s3, so what feels to us like a straight line but of course is not

As we move backward the earth gets smaller and smaller,  receding off into the distance, like we’d expect, but it never disappears. eventually, it shrinks down to some smallest size, that corresponds to reaching the antipodal point.
And then something weird happens, it starts to get larger again. It’s not that we’ve started moving in the opposite direction


--- 

# New Images and Visualizations
[[Start running through visualizations as fast as we can and say they can check
them out for themselves on their own time]]
[[Maybe show affine varieties before showing the projective versions]]

---

# How To Make Beautiful Images Using Math

[[ Quickly explain the problem of rendering]]
[[ Explain ray tracing/raymarching with an SDF and then say what our naive
approximate SDF is with a code block and LaTeX formula]]

[[ If there is time we go into Descartes Method in Berntein Basis]]

---

# *Fin.*

Any questions?

[[this slide should include some things to make asking questions easier, perhaps
formulas, diagrams, or a slideshow of nice renders we've made]]

---




[[this is old stuff]]

### A better way to view $\mathbb{P^2}$
discuss the double cover from S^2


<!-- We use data-src instead of src attribute to enable --
  -- lazy-loading by reveal.js -->
<iframe data-src="example.html"></iframe>




