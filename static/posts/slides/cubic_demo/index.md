---
title: "Symmetric Cubic Surfaces"
date: "2026-03-01"
---


Here we are plotting a symmetric cubic surface in the spherical geometry of
$\mathbb{RP}^3$.

<canvas id="canvas" style="height: 500px; max-width: 100%;
display: block;"></canvas>
<script type="module">
    import init from "./my_wgpu_project.js";
    init().then(() => {console.log("WASM Loaded");});
</script>


To start, we are illustrating the classic result of the existence of 27 straight
lines on a cubic surface. Finding these lines is a more involved task for a
general cubic but luckily we are using results from Brazelton and Raman 2024
that allow us to easily compute and visualize the lines.

By symmetric we mean the defining homogenous polynomial $p(x_0, x_1, x_2, x_3)$
stays the same after swapping any one of $x_0,x_1,x_2,x_3$ with eachother. In
other words our polynomial is invariant under the $S_4$ action on the coordinate
axes in $\mathbb R^4$.

There are several useful facts brought by the $S_4$-symmetric condition, the
first of which being that it guarantees a solution in radicals for the
configuration of the 27 lines on the cubic. 

A general homogenous cubic has 20 terms and so the moduli space is equivalent to
$\mathbb P^19$ after modding out by scaling all the coefficients.

This symmetric condition means that the coefficient for $x_0^3$ is the same as
$x_1^3$ and the coefficient for $x_0^2 x_1^2$ is the same as $x_3^2 x_2$ etc.
Thus we can group the terms like so

$$ c_1 \left(\sum_{0 \leq i \leq 3} x_i^3 \right) + c_2 \left(\sum_{0 \leq i \neq j \leq 3} x_i^2x_j \right) + c_3 \left(\sum_{0 \leq i < j < k \leq 3} x_ix_jx_k \right)$$
 
 So under the condition of symmetry the space of cubics is equivalent to
 $\mathbb P^2$. We can compute the discriminant in terms of $c_1, c_2, c_3$.  So
 we can pullback the discriminant by the double cover $S^2 \to \mathbb P^2$ to
 get a map of the discriminant locus on the sphere displayed in the bottom left.
 Of course this is assuming purely real coefficients.
 
 The different factors of the discriminant correspond to different curves on the
 minimap and can allow us to compute how many real lines are present for a given
 cubic. The maroon color corresponds to 27 lines while the black and blue color
 corresponds to 3 lines. The difference between the blue and black regions is
 the presence of a topological sphere part of the real surface.
 
 The colors of the lines have meaning as well. Each color corresponds to an
 orbit of one line in the geometry. 

 There are just three blue lines of which correspond to the $S_4/D_8$ orbit of
 the projective line

 $$ [s: -s: t: -t] .$$
 
 In other words, that line is invariant under the $D_8$ action on the variables
 but is brought to two other lines by the full $S_8$ action.
 
 There are 12 purple lines, corresponding to the $S_4/(1 2)$ orbit of some
 projective line and 12 orange lines corresponding to the $S_4/(1 2)(3 4)$ orbit
 of some other line.
 
 The details can be found in Theorem 7.1 of Brazelton and Raman 2024. 
 
