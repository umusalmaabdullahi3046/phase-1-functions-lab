const HQ_BLOCK = 42;
const FEET_PER_BLOCK = 264;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - HQ_BLOCK);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * FEET_PER_BLOCK;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}