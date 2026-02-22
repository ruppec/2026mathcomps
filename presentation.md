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

<img src="euclidsparallellines.png">

"Parallel lines do not meet."

Today we will disobey Euclid and consider:

what if parallel lines did meet *somewhere*.

---

### Motivation: Perspective In Art
Since the Renaissance, artists have used "vanishing points" to represent
3-dimensional geometry on a flat canvas.

<img height="200" src="Cappella_brancacci,_Guarigione_dello_storpio_e_resurrezione_di_Tabita_(restaurato),_Masolino.jpeg" data-preview-image data-preview-fit="cover">
<img height="200" src="first_use_of_perspective_with_lines.png" data-preview-image data-preview-fit="cover">

Parallel lines along the same direction are drawn meeting at a shared vanishing
point placed on the horizon line.

Note:
Since our project is on illustrating math, we will first discuss how artists
represented 3D space in an accurate and illuminating way.

The picture is of Masolino da Panicale's St. Peter Healing a Cripple and the Raising of Tabitha (c. 1423), the earliest extant artwork known to use a consistent vanishing point.
The correct way of drawing perspective is to draw parallel lines converging at
the same point, the "vanishing point" of that direction which is placed on the
horizon line.

---

*Projective Geometry* is when we take these vanishing points seriously by
adjoining "points at infinity" to normal Euclidean space.


<img height="300" src="penroseillustration.png" data-preview-image data-preview-fit="cover">

This gives us a clean way of talking about phenomena at infinity (think
asymptotes, convergence...)

---

We can represent many points of the *projective plane* using the artistic method
of perspective projection.

<img height="350" src="Vanishing_point.svg">

**Fact**: In the projective plane *any* two lines intersect at exactly one point.

Note: Here we can represent many points of the 2D space on the bottom using
points on the image plane. What's labeled as the vanishing point is just the way
of representing the vanishing point on the image plane.

It's this perspective projection informed by the work of artists that inspires
the mathematical definition of projective space.

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
    <img src="bezout-cubic-quartic.jpg" style="width: 100%; border: none; box-shadow: none;">
    <img src="conic-section.png" style="width: 70%; border: none; box-shadow: none;">
  </div>
</div>

Note: We don't have time in this presentation to explain how all of this works.
But know that projective space pops up all over math and physics.

---

### Plane Model of Projective Space

Using the artistic model of projective space shown before we are unable to
represent all points.

<img height="300" src="Vanishing_point.svg">

**Problem**: We can't use a point on the image plane to represent the point directly below $O$.


Note:
In fact in the way it's shown here we aren't representing points behind O either.

---

### Sphere Model of Projective Space

<img src="spheremodel.png">

Take the line going from the Eye to some point $P$ on the plane.  The intersection
of that line and the sphere gives us a representative point.

---

**Problem**: Two lines must intersect in just one point!


<img height='250' src="spheremodel.png" style="margin: -10px">

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
<img height="300" src="Hypersphere.png" >
<figcaption style="font-size: 0.6em; margin-top:-20px">
The direct projection of the hypersphere onto $\mathbb R^3$.
</figcaption>
</figure>

---

# Spherical Geometry

---

[Define what a geodesic is by first defining a notion of distance on the sphere,
and that the geodesic is the shortest path]

---

[Explain spherical geometry for S^2 and then argue by analogy that it works
similarly in S^3.]
[Specifically discuss how geodesics converge at the antipodal point]

---

[Include the interactive demo of the earth in S^3 in an iframe]

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




